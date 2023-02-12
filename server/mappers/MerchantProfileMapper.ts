import {MerchantProfile} from "@prisma/client";
import {MerchantProfileDto} from "@server/dto/MerchantProfileDto";

export default class MerchantProfileMapper {
  public static toDto(domainObj: MerchantProfile): MerchantProfileDto {
    return {
      id: domainObj.id,
      name: domainObj.name,
      email: domainObj.email,
      logo: domainObj.logo,
      website: domainObj.website
    }
  }
}
