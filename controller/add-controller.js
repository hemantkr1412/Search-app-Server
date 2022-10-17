import ADDS from "../Models/ADDS";

export const displayadd = async (req, res) => {
  try {
    const keyWord = req.body.keyWord;

    const add = await ADDS.aggregate([
      {$match: { $text: { $search: keyWord } } },
      { $lookup:
        {
        from: "company",
        localField: "companyId",
        foreignField: "_id",
        as:"name"
      }
    },
    { $unwind: "$name" },
    { $project: { _id: 0, primary_text: 1, headline: 1,description:1 ,CTA: 1, imageUrl: 1, name: "$name.name" } }
    ]);

    res.status(201).json({
      add,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}