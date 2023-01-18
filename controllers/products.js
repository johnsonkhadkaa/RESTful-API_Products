const Product = require('../models/product')

const getAlProducts = async(req, res) =>{

  const { company,name ,feature ,sort ,select} = req.query
  const queryObject = {}

  if(company){
    queryObject.company = company
    console.log(queryObject)
  }

  if(feature){
   queryObject.feature = feature
  }

  if(name){
    queryObject.name = {$regex : name , $options : 'i'}
    console.log(queryObject)
  }

  let apiData = Product.find(queryObject)
  // console.log(apiData)

  if(sort){
    // let sortFix = sort.replace(',',' ')  ---> both .replace and '.split+.join' can be used
    let sortFix = sort.split(',').join(' ')
    apiData = apiData.sort(sortFix)

  }
  if(select){
    // let selectFix = select.replace(',',' ') ---> both .replace and '.split+.join' can be used
    let selectFix = select.split(',').join(' ')
    apiData = apiData.select(selectFix)

  }

  // Pagination formula
  let page = Number(req.query.page) || 1
  let limit = Number(req.query.limit) || 3

  let skip = (page-1)*limit
  apiData = apiData.skip(skip).limit(limit)

  const Products = await apiData
  res.status(200).json({Products ,nHbits : Products.length})
}

const getAlProductsTesting = async(req, res) =>{
  const allProdData = await Product.find(req.query)
  console.log(req.query);
  res.status(200).json({allProdData})
}

module.exports = {getAlProducts , getAlProductsTesting}
