export default function logger(req, res, next) {
  console.log(`${new Date().toDateString()} - ${req.method}`);
  next();
}
