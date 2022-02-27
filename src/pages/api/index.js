export default function handler(req, res) {
  res.status(200).json({
    message: 'Comcamp33 api, developed by CPE @ KMUTT',
    timestamp: new Date(),
  });
};
