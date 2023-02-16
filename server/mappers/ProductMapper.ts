import {ProductDto} from "@server/dto/ProductDto";
import {Product} from "@prisma/client";

export default class ProductMapper {
  public static toDto(domainObj: Product): ProductDto {
    return {
      id: domainObj.id,
      name: domainObj.name,
      ean: domainObj.ean,
      category: domainObj.category,
      imageUrl: domainObj.imageUrl
    };
  }
}
