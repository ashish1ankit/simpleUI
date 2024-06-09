module.exports=(temp,product) => {
    let output=temp.replace(/{%PRODUCTNAME%}/g,product.productName);//,,here/{$$}/ slahes makes it as regular expression and g means it is present globally
    output=output.replace(/{%IMAGE%}/g,product.image);
    output=output.replace(/{%PRICE%}/g,product.price);
    output=output.replace(/{%FROM%}/g,product.from);
    output=output.replace(/{%NUTRIENT%}/g,product.nutrients);
    output=output.replace(/{%QUANTITY%}/g,product.quantity);
    output=output.replace(/{%DESCRIPTION%}/g,product.description);
    output=output.replace(/{%ID%}/g,product.id);
    output=output.replace(/{%SLUGNAME%}/g,product.slugName);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');

    return output;
}


