import {join} from 'path';

const homeController = (req, res) => {
//   res.sendFile('c:/users/admin/desktop/node/express/ch7/views/index.html');  
    res.sendFile(join(process.cwd(), 'views', 'index.html'))
};

export { homeController };
