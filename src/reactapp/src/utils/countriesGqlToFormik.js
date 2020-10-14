export const countriesGqlToFormik = countries => {
    return countries.map(country => {
        return {
            value: country.id,
            label: country.full_name_locale || country.id,
        };
    }).sort((a, b) => (a.label > b.label) ? 1 : -1);
};
