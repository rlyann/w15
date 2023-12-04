export const getProductsList = (request, response) => {
    response.status(200).json({
        data: [
            {
                product_image: "" ,
                tittle: "",
                description: "",
                price: "",
            }
        ],
        message: "Sukses mengambil data",
    });
};