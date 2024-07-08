const router = require('express').Router();
const { validYear,
        validatesInitialAndFinalValue
 } = require('../../middlewares/validatingValues');
const { returnsIpcaData, 
        returnsIpcaDataYear, 
        returnsIpcaDataId, 
        returnsCalculoIpca 
} = require('../../controllers/ipcaController');

// # DADOS DO ICPA #
router.get('/historicoIpca/calculo', validYear, validatesInitialAndFinalValue, returnsCalculoIpca);
router.get('/historicoIpca/anoIpca', validYear, returnsIpcaDataYear);
router.get('/historicoIpca/:id', returnsIpcaDataId);
router.get('/historicoIpca', returnsIpcaData);

module.exports = router;