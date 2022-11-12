import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import Product from "../model/productModel.js"
import ApiFeatures from "../utils/apifeatures.js";

export const createProduct =catchAsyncErrors( async (req,res,next)=>
{
    req.body.user = req.user.id;
    const product=await Product.create(req.body);
    res.status(201).json(
        {
    
            success: true,
            product
        })
});


export const getAllProducts = catchAsyncErrors(async(req,res)=>
{
    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    
    const products=  await apiFeature.query;
    res.status(200).json(
        {
            success: true,
            products
        })
});



export const updateProduct= catchAsyncErrors(async (req,res,next)=>
{
    let product = await findById(req.params.id);
    if(!product){
        return next( new ErrorHandler("Product not found", 404));
    }

    product =await  findByIdAndUpdate(req.params.id,req,
    {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json(
        {
            success: true,
            product

        })



})



export const deleteProduct= catchAsyncErrors(async(req,res,next) =>
{
    const product= await findById(req.params.id)
    if(!product){
        return next( new ErrorHandler("Product not found", 404));
    }

    await product.remove();
    res.status(200).json(
        {
            success: true,
            message:"Product deleted successfully "
        })
})


export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await findById(req.params.id);
  
    if(!product){
        return next( new ErrorHandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
      productCount,
    });
  });
 