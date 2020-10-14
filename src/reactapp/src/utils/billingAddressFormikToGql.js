export const billingAddressFormikToGql = ({address}) => {
    return `{
            company: "${address.company}",
            firstname: "${address.firstname}",
            lastname: "${address.lastname}",
            street: ["${
                Array.isArray(address.street)
                    ? address.street.implode('","')
                    : address.street
            }"],
            telephone: "${address.phone}",
            country_code: "${address.country}",
            postcode: "${address.zipcode}",
            city: "${address.city}",
        }`;
};
