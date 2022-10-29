// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        name: 'Guntur Aji Pratama1',
        gender: 'Male'
      },
      {
        name: 'Guntur Aji Pratama2',
        gender: 'Male'
      },
      {
        name: 'Guntur Aji Pratama3',
        gender: 'Male'
      },
      {
        name: 'Guntur Aji Pratama4',
        gender: 'Male'
      }
    ]
  })
}
