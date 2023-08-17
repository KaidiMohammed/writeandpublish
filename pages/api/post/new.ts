
export default function handler(req: Request, res: any) {
  if (req.method != "POST") {
    res.status(405).json({ "message": "method not allowed" })
  }
  else {
    const post: any = req.body;

    res.status(200).json(post);
  }
}
