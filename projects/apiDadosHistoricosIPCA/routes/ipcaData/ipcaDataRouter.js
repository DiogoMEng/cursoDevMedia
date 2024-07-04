const router = require('express').Router();
const { returnsIpcaData, 
        returnsIpcaDataYear, 
        returnsIpcaDataId, 
        returnsCalculoIpca 
} = require('../../controllers/ipcaController');

// # DADOS DO ICPA #
router.get('/historicoIpca/calculo', returnsCalculoIpca);
router.get('/historicoIpca/anoIpca', returnsIpcaDataYear);
router.get('/historicoIpca/:id', returnsIpcaDataId);
router.get('/historicoIpca', returnsIpcaData);

module.exports = router;