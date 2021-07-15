import * as React from 'react';
import createSvgIcon from './utils/createSvgIcon';

export default createSvgIcon(
  [<path fill="#F0F1F2" fillRule="evenodd" d="M2.8787 5.8787C2 6.7574 2 8.1716 2 11v2c0 2.8284 0 4.2426.8787 5.1213C3.7574 19 5.1716 19 8 19h8c2.8284 0 4.2426 0 5.1213-.8787C22 17.2426 22 15.8284 22 13v-2c0-2.8284 0-4.2426-.8787-5.1213C20.2426 5 18.8284 5 16 5H8c-2.8284 0-4.2426 0-5.1213.8787zM10 11.737v.526c0 1.645 0 2.4675.5281 2.7502.5282.2826 1.2126-.1736 2.5813-1.0861l.3944-.263c1.129-.7526 1.6934-1.1289 1.6934-1.6641 0-.5352-.5644-.9115-1.6934-1.6641l-.3944-.263c-1.3687-.9125-2.0531-1.3687-2.5813-1.086C10 9.2694 10 10.092 10 11.737z" key="0" />,<path fillRule="evenodd" d="M7.9748 1.25h8.0505c.4444 0 .8155 0 1.1201.0208.3171.0216.6166.0683.907.1885a2.75 2.75 0 0 1 1.4883 1.4883c.1203.2904.1669.59.1885.907.0115.1689.0167.358.019.569.7453.14 1.3827.404 1.9035.9247.6019.602.8608 1.3598.9818 2.26.1165.867.1165 1.9692.1165 3.3368v2.1098c0 1.3676 0 2.4699-.1165 3.3369-.121.9001-.3799 1.6579-.9818 2.2599-.5208.5207-1.1582.7847-1.9035.9248-.0023.2108-.0075.4-.019.5689-.0216.3171-.0682.6166-.1885.907a2.7502 2.7502 0 0 1-1.4883 1.4883c-.2904.1203-.5899.1669-.907.1885-.3046.0208-.6757.0208-1.1201.0208H7.9747c-.4444 0-.8155 0-1.12-.0208-.3172-.0216-.6167-.0682-.907-.1885a2.75 2.75 0 0 1-1.4884-1.4883c-.1202-.2904-.1669-.5899-.1885-.907-.0116-.1689-.0167-.3581-.019-.5689-.7453-.1401-1.3827-.4041-1.9035-.9248-.6019-.602-.8608-1.3598-.9818-2.2599-.1165-.867-.1165-1.9693-.1165-3.3369v-2.1098c0-1.3676 0-2.4699.1165-3.3369.121-.9.38-1.658.9818-2.2599.5208-.5207 1.1582-.7847 1.9035-.9248.0023-.2108.0074-.4.019-.5689.0216-.317.0682-.6166.1885-.907a2.75 2.75 0 0 1 1.4883-1.4883c.2904-.1202.59-.1669.907-.1885.3046-.0208.6757-.0208 1.1201-.0208zm10.2579 2.7067c.0064.0943.0105.199.013.3188-.6382-.0255-1.3663-.0255-2.1908-.0255H7.9451c-.8245 0-1.5526 0-2.1908.0255a6.8585 6.8585 0 0 1 .013-.3188c.0164-.2407.0459-.3579.0779-.435a1.25 1.25 0 0 1 .6764-.6766c.0772-.032.1944-.0614.4351-.0778C7.2042 2.7504 7.5238 2.75 8 2.75h8c.4762 0 .7958.0004 1.0433.0173.2407.0164.3579.0459.4351.0778a1.251 1.251 0 0 1 .6765.6766c.0319.0771.0614.1943.0778.435zm.013 15.7678c-.6382.0255-1.3663.0255-2.1908.0255H7.9451c-.8245 0-1.5526 0-2.1908-.0255.0025.1198.0066.2245.013.3188.0164.2407.0459.3579.0779.4351.1268.3062.3702.5496.6764.6765.0772.0319.1944.0614.4351.0778.2475.0169.5671.0173 1.0433.0173h8c.4762 0 .7958-.0004 1.0433-.0173.2407-.0164.3579-.0459.4351-.0778a1.2508 1.2508 0 0 0 .6765-.6765c.0319-.0772.0614-.1944.0778-.4351a6.8518 6.8518 0 0 0 .013-.3188zM3.409 6.409c.2768-.2767.6654-.4572 1.3991-.5558C5.5635 5.7515 6.5646 5.75 8 5.75h8c1.4354 0 2.4365.0016 3.1919.1032.7338.0986 1.1223.279 1.3991.5558.2768.2768.4572.6654.5559 1.3991.1015.7554.1031 1.7565.1031 3.1919v2c0 1.4354-.0016 2.4365-.1031 3.1919-.0987.7338-.2791 1.1223-.5559 1.3991-.2768.2768-.6653.4572-1.3991.5559-.7554.1015-1.7565.1031-3.1919.1031H8c-1.4354 0-2.4365-.0016-3.1919-.1031-.7337-.0987-1.1223-.2791-1.399-.5559-.2769-.2768-.4573-.6653-.556-1.3991C2.7516 15.4365 2.75 14.4354 2.75 13v-2c0-1.4354.0016-2.4365.1031-3.1919.0987-.7337.2792-1.1223.556-1.399zm10.1164 3.04-.0495-.033c-.642-.428-1.1934-.7957-1.6521-1.0124-.4711-.2225-1.0627-.392-1.6496-.078-.5868.3142-.774.9004-.8501 1.4159-.0742.5017-.0741 1.1645-.0741 1.9361v.645c0 .7716 0 1.4344.074 1.9361.0763.5155.2634 1.1017.8502 1.4158.5869.3141 1.1785.1446 1.6496-.0779.4587-.2166 1.0101-.5843 1.6521-1.0124l.0495-.033.3945-.263.0461-.0307c.5249-.3499.987-.6579 1.3107-.9504.3442-.311.6705-.726.6705-1.307s-.3263-.996-.6705-1.307c-.3237-.2925-.7858-.6005-1.3107-.9504l-.0461-.0307-.3945-.263zm-2.6698.2069c-.0004-.0007.0034-.002.0129-.0018-.0077.0024-.0124.0024-.0129.0018zm.3277.104c-.1662-.0784-.2558-.1-.2975-.1047-.0192.0373-.051.1238-.0778.3056-.056.3786-.058.9283-.058 1.7763v.526c0 .848.002 1.3977.058 1.7763.0268.1818.0586.2683.0778.3056.0417-.0047.1313-.0263.2975-.1048.346-.1634.8045-.4667 1.5101-.9371l.3944-.2629c.5851-.3901.9519-.637 1.1832-.846.1092-.0987.1537-.1594.1708-.1889L14.4446 12l-.0028-.0052c-.0171-.0295-.0616-.0902-.1708-.1889-.2313-.209-.5981-.4559-1.1832-.846l-.3944-.2629c-.7056-.4704-1.1641-.7737-1.5101-.9371zm-.3277 4.5844c.0005-.0006.0052-.0007.0129.0018-.0095.0001-.0133-.0011-.0129-.0018zm.0388.0157c.0063.005.009.009.0087.0097-.0003.0008-.0035-.0017-.0087-.0097zm0-4.7198c.0052-.008.0084-.0105.0087-.0097.0003.0007-.0024.0047-.0087.0097z" key="1" />,]
, 'VideoLibraryDuotone');