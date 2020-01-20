/* FUNCION PRIVADA DE UTILIDAD */
const utility = {

}
utility.objToArray = ( objeto ) => {
    let result = Object.keys(objeto).map( key => {
        return [key, objeto[key]];
    });
    return result;
};

module.exports = utility;

