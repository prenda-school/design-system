import * as React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [<path fill="#F0F1F2" fillRule="evenodd" d="M12 2c-1.4142 0-2.1213 0-2.5607.4393C9 2.8787 9 3.5858 9 5v.7574c0 .613 0 .9197.1142 1.1953.1142.2757.331.4924.7645.926L12 10l2.1213-2.1213c.4336-.4336.6503-.6503.7645-.926C15 6.6771 15 6.3705 15 5.7574V5c0-1.4142 0-2.1213-.4393-2.5607C14.1213 2 13.4142 2 12 2zM2.4393 9.4393C2 9.8787 2 10.5858 2 12c0 1.4142 0 2.1213.4393 2.5607C2.8787 15 3.5858 15 5 15h.7574c.613 0 .9197 0 1.1953-.1142.2757-.1142.4924-.3309.926-.7645L10 12 7.8787 9.8787c-.4336-.4336-.6503-.6503-.926-.7645C6.6771 9 6.3705 9 5.7574 9H5c-1.4142 0-2.1213 0-2.5607.4393zm19.1214 0C22 9.8787 22 10.5858 22 12c0 1.4142 0 2.1213-.4393 2.5607C21.1213 15 20.4142 15 19 15h-.7574c-.6131 0-.9196 0-1.1953-.1142-.2757-.1142-.4924-.3309-.926-.7645L14 12l2.1213-2.1213c.4336-.4336.6503-.6503.926-.7645C17.323 9 17.6295 9 18.2426 9H19c1.4142 0 2.1213 0 2.5607.4393zM9.4393 21.5607C9.8787 22 10.5858 22 12 22c1.4142 0 2.1213 0 2.5607-.4393C15 21.1213 15 20.4142 15 19v-.7574c0-.6131 0-.9196-.1142-1.1953-.1142-.2757-.3309-.4924-.7645-.926L12 14l-2.1213 2.1213c-.4336.4336-.6503.6503-.7645.926C9 17.323 9 17.6295 9 18.2426V19c0 1.4142 0 2.1213.4393 2.5607z" key="0" />,<path fillRule="evenodd" d="M11.9506 1.25h.0988c.6648 0 1.2377 0 1.6964.0616.4917.0661.9629.2152 1.3452.5974.3822.3823.5313.8535.5974 1.3452.0617.4587.0616 1.0316.0616 1.6964v.8068l.0001.104c.0008.5092.0015.961-.1714 1.3783-.1728.4173-.4928.7363-.8534 1.0958l-.0736.0735-2.1214 2.1213a.75.75 0 0 1-1.0606 0L9.3484 8.409l-.0738-.0735c-.3605-.3595-.6805-.6785-.8533-1.0958-.1729-.4173-.1722-.8691-.1714-1.3782l.0001-.1041v-.8068c0-.6648 0-1.2377.0616-1.6964.0661-.4917.2152-.963.5974-1.3452.3823-.3822.8535-.5313 1.3452-.5974.4587-.0617 1.0316-.0616 1.6964-.0616zM10.454 2.7982c-.3253.0438-.4272.1144-.4843.1715-.0571.057-.1277.159-.1715.4843C9.7516 3.801 9.75 4.2717 9.75 5v.7574c0 .6743.0133.8025.057.9083.044.1058.1252.2058.602.6826L12 8.9393l1.591-1.591c.4768-.4768.5581-.5768.6019-.6826.0438-.1058.0571-.234.0571-.9083V5c0-.7283-.0016-1.199-.0482-1.546-.0438-.3253-.1144-.4272-.1715-.4843-.0571-.0571-.159-.1277-.4843-.1715-.3469-.0466-.8177-.0482-1.546-.0482-.7283 0-1.1991.0016-1.546.0482zM5.7574 9.75c.6743 0 .8025.0133.9083.057.1058.0439.2058.1252.6826.602L8.9393 12l-1.591 1.591c-.4768.4768-.5768.5581-.6826.6019-.1058.0438-.234.0571-.9083.0571H5c-.7283 0-1.199-.0016-1.546-.0482-.3253-.0438-.4272-.1144-.4843-.1715-.0571-.0571-.1277-.159-.1715-.4843-.0466-.3469-.0482-.8177-.0482-1.546 0-.7283.0016-1.1991.0482-1.546.0438-.3253.1144-.4272.1715-.4843.057-.0571.159-.1277.4843-.1715C3.801 9.7516 4.2717 9.75 5 9.75h.7574zm1.4823-1.3287c-.4173-.1729-.8691-.1722-1.3782-.1714l-.1041.0001h-.8068c-.6648 0-1.2377 0-1.6964.0616-.4917.0661-.963.2152-1.3452.5974-.3822.3823-.5313.8535-.5974 1.3452-.0617.4587-.0616 1.0316-.0616 1.6964v.0988c0 .6648 0 1.2377.0616 1.6964.0661.4917.2152.9629.5974 1.3452.3823.3822.8535.5313 1.3452.5974.4587.0617 1.0315.0616 1.6964.0616h.8068l.104.0001c.5092.0008.961.0015 1.3783-.1714.4173-.1728.7363-.4928 1.0958-.8534l.0735-.0737 2.1213-2.1213a.75.75 0 0 0 0-1.0606L8.409 9.3484l-.0735-.0738c-.3595-.3605-.6785-.6805-1.0958-.8533zM18.2426 8.25l-.1041-.0001c-.5091-.0008-.9609-.0015-1.3782.1714-.4173.1728-.7363.4928-1.0958.8533l-.0735.0738-2.1213 2.1213a.75.75 0 0 0 0 1.0606l2.1213 2.1213.0735.0737c.3595.3606.6785.6806 1.0958.8534.4173.1729.8691.1722 1.3782.1714l.1041-.0001h.8068c.6649 0 1.2377.0001 1.6964-.0616.4917-.0661.9629-.2152 1.3452-.5974.3822-.3823.5313-.8535.5974-1.3452.0617-.4587.0616-1.0315.0616-1.6963v-.099c0-.6648.0001-1.2376-.0616-1.6963-.0661-.4917-.2152-.963-.5974-1.3452-.3823-.3822-.8535-.5313-1.3452-.5974-.4587-.0617-1.0316-.0616-1.6964-.0616h-.8068zm-.9083 1.557c.1058-.0437.234-.057.9083-.057H19c.7283 0 1.1991.0016 1.546.0482.3253.0438.4272.1144.4843.1715.0571.0571.1277.159.1715.4843.0466.3469.0482.8177.0482 1.546 0 .7283-.0016 1.1991-.0482 1.546-.0438.3253-.1144.4272-.1715.4843-.0571.0571-.159.1277-.4843.1715-.3469.0466-.8177.0482-1.546.0482h-.7574c-.6743 0-.8025-.0133-.9083-.0571s-.2058-.1251-.6827-.6019L15.0607 12l1.591-1.591c.4768-.4768.5768-.5581.6826-.602zm-2.609 5.8575-.0736-.0735-2.1214-2.1213a.75.75 0 0 0-1.0606 0L9.3484 15.591l-.0738.0735c-.3605.3595-.6805.6785-.8533 1.0958-.1729.4173-.1722.8691-.1714 1.3782l.0001.1041v.8068c0 .6648 0 1.2377.0616 1.6964.0661.4917.2152.9629.5974 1.3452.3823.3822.8535.5313 1.3452.5974.4587.0617 1.0315.0616 1.6963.0616h.099c.6648 0 1.2376.0001 1.6963-.0616.4917-.0661.9629-.2152 1.3452-.5974.3822-.3823.5313-.8535.5974-1.3452.0617-.4587.0616-1.0316.0616-1.6964v-.8068l.0001-.1041c.0008-.5091.0015-.9609-.1714-1.3782-.1728-.4173-.4928-.7363-.8534-1.0958zm-4.3163.9872L12 15.0607l1.591 1.591c.4768.4768.5581.5768.6019.6826.0438.1058.0571.234.0571.9083V19c0 .7283-.0016 1.1991-.0482 1.546-.0438.3253-.1144.4272-.1715.4843-.0571.0571-.159.1277-.4843.1715-.3469.0466-.8177.0482-1.546.0482-.7283 0-1.1991-.0016-1.546-.0482-.3253-.0438-.4272-.1144-.4843-.1715-.0571-.0571-.1277-.159-.1715-.4843-.0466-.3469-.0482-.8177-.0482-1.546v-.7574c0-.6743.0133-.8025.057-.9083.044-.1058.1252-.2058.602-.6826z" key="1" />,]
, 'GamesDuotone');