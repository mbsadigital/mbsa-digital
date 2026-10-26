const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || "admin123";

function requireAdmin(req, res, next) {
  const adminKeyHeader = req.headers["x-admin-key"];
  const authHeader = req.headers["authorization"];

  let token = adminKeyHeader;
  if (!token && authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token || token !== ADMIN_SECRET) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized: Admin access required to create, edit, update, or delete blog articles."
    });
  }

  next();
}

module.exports = {
  ADMIN_SECRET,
  requireAdmin
};
