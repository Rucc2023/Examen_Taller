
export const registerUser = (req: any, res: any) => {
    res.status(200).json({ message: 'No se encontró el usuario, favor de registrar.' });
};

export const obtenerUsuarios = (req: any, res: any) => {
    const usuarios = [
        { id: 1, nombre: "Ricardo Cruz", email: "R@gmail.com" },
        { id: 2, nombre: "Solís Pasquett", email: "s@gmail.com" },
        { id: 3, nombre: "Citlalli", email: "c@gmail.com" }
    ];
    
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(usuarios, null, 3));
};
