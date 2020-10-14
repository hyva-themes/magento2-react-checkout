export const billingAddressGqlToFormik = address => {
    return {
        company: address.company || '',
        firstname: address.firstname || '',
        lastname: address.lastname || '',
        street:
            (Array.isArray(address.street)
                ? address.street[0]
                : address.street) || '',
        phone: address.telephone || '',
        zipcode: address.postcode || '',
        city: address.city || '',
        country: address.country.code || ''
    };
};
