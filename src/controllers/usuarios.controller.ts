
const idUsers = ["Rick", "Armenta"];

export const getUserById = (req: any, res: any) => {
    const { id } = req.params; 
    const finded = idUsers.includes(id); 

    if (finded) {
        res.status(200).json({ message: `Hola Usuario: ${id}` }); 
    } else {
        res.redirect("/usuarios/register"); 
    }
};

export const registerUser = (req: any, res: any) => {
    res.status(200).json({ message: 'No se encontró el usuario, favor de registrar.' });
};