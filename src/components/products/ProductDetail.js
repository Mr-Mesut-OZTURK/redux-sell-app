import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";


const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange,
    error
}) => {
    return (
        <form onSubmit={(event)=>onSave(event)}>
            <h2>{product.id ? "Gücelle" : "Ekle"}</h2>

            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error={error.productName}
            />

            <SelectInput
                name="categoryId"
                label="Category"
                value={product.categoryId || ""}
                defaultOption="-Select-"
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                onChange={onChange}
                error={error.productName}
            />
            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error={error.productName}
            />

            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error={error.productName}
            />

            <TextInput
                name="unitsInStock"
                label="Unit In Stock"
                value={product.unitsInStock}
                onChange={onChange}
                error={error.productName}
            />

            <button type="submit" className="btn btn-success">
                Save
            </button>

        </form>
    )
}

export default ProductDetail
