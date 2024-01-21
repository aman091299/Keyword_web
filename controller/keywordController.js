const Keyword = require("../models/keywordSchema");

exports.keyword = async (req, res) => {
  try {
    const { keyword } = req.body;
    if(!keyword){
      res.status(401).json({
        success: false,
        message:"Please enter keyword"
      })
    }
    var datetime = new Date();
    const month = datetime.toUTCString().slice(8, 11);
    const year = datetime.toUTCString().slice(12, 16);
    const findKeyword = await Keyword.findOne({
      month,
      year,
      keyword,
    });

    let result;
    if (findKeyword) {
      result = await Keyword.updateOne({
        month,
        year,
        keyword,
    }, {
        $inc: {
            searchVolume: 1
        }
    })
    } else {
     
      result = await Keyword.create({
        keyword,
        month,
        year,
        searchVolume: 1,
      });
    }
 
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.allKeyword = async (req, res) => {
  try {  
   const {keyword,month,year}=req.body;
   if(!keyword || !month || !year){
    return res.status(401).json({
      success: false,
      message: "Please enter keyword ,month and year",
    });
   }
    const data = await Keyword.findOne({keyword,month,year});
    return res.status(500).json({
      Allkeyword: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
