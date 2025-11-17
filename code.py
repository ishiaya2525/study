from logging import getLogger, FileHandler, DEBUG, ERROR, Formatter

formatter = Formatter('%(levelname)s - %(asctime)s - %(filename)s - %(message)s')
logger = getLogger(__name__)

handler = FileHandler('log2.txt')
handler.setLevel(DEBUG)
handler.setFormatter(formatter)

error_handler = FileHandler('error.txt')
error_handler.setLevel(ERROR)
error_handler.setFormatter(formatter)

logger.setLevel(DEBUG)
logger.addHandler(handler)
logger.addHandler(error_handler)

logger.info('プログラムが開始しました')
logger.debug('入力値は1000です')
logger.warning('ディスクの空き容量が少なくなっています')
logger.error('ファイルの読み込みに失敗しました')