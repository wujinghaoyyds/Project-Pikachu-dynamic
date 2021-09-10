const string = `#demo2 .container .earLeft {
    position: absolute;
    width: 36px;
    height: 160px;
    left: 48px;
    top: 0;
    background: #fed823;
    border-bottom-left-radius: 80px 70%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    transform: rotateZ(25deg);
    border-left: 3px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    border-top: 1px solid #0A0A0A;
    overflow: hidden;
    z-index: 100;
}
#demo2 .container .earLeft::after {
    position: absolute;
    content: '';
    display: block;
    width: 38px;
    height: 55px;
    background: #231815;
    transform: rotateZ(15deg);
    border-bottom: 3px solid #0A0A0A;
}
#demo2 .container .earRight {
    position: absolute;
    width: 30px;
    height: 140px;
    top: 69px;
    right: 80px;
    background: #231815;
    transform: rotateZ(80deg);
    border-bottom-left-radius: 80px 150%;
    border-top-left-radius: 190%;
    border-top-right-radius: 150%;
    border: 3px solid #0A0A0A;
    border-bottom: none;
    overflow: hidden;
    z-index: 200;
}
#demo2 .container .earRight::before {
    position: absolute;
    content: '';
    display: block;
    width: 40px;
    height: 110px;
    bottom: 0;
    right: -5px;
    background: #fed823;
    border-radius: 0 60% 0 0;
    border-top: 3px solid #0A0A0A;
}
#demo2 .container .pikBody {
    position: absolute;
    width: 185px;
    height: 340px;
    bottom: 0;
    transform: rotateZ(-1deg);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 130px 150px 100px 150px /120px 100px 130px 100px;
    z-index: 300;
}
#demo2 .container .pikBody .pikHead {
    position: absolute;
    width: 160px;
    height: 160px;
    background: #fed823;
    right: 7px;
    border: 3px solid #0A0A0A;
    border-radius: 130px 150px 25px 80px/120px 100px 120px 80px;
    border-bottom: none;
}
#demo2 .container .pikBody .pikHead .eyeLeft {
    position: absolute;
    top: 50px;
    left: 10px;
    width: 20px;
    height: 32px;
    background: #0A0A0A;
    border-radius: 50%;
    transform: rotateZ(10deg);
}
#demo2 .container .pikBody .pikHead .eyeLeft::before {
    content: '';
    position: absolute;
    display: block;
    width: 8px;
    height: 13px;
    background: #ffffff;
    border-radius: 50%;
    left: 10px;
    top: 5px;
    transform: rotateZ(8deg);
}
#demo2 .container .pikBody .pikHead .eyeLeft::after {
    content: '';
    position: absolute;
    display: block;
    width: 24px;
    height: 3px;
    background: #000000;
    transform: rotateZ(28deg);
}
#demo2 .container .pikBody .pikHead .eyeRight {
    position: absolute;
    top: 57px;
    right: 36px;
    width: 30px;
    height: 33px;
    background: #0A0A0A;
    border-radius: 50%;
}
#demo2 .container .pikBody .pikHead .eyeRight::before {
    content: '';
    position: absolute;
    display: block;
    width: 10px;
    height: 12px;
    background: #ffffff;
    border-radius: 50%;
    left: 8px;
    top: 5px;
}
#demo2 .container .pikBody .pikHead .eyeRight::after {
    content: '';
    position: absolute;
    display: block;
    width: 28px;
    height: 3px;
    background: #000000;
    right: 3px;
    transform: rotateZ(-28deg);
}
#demo2 .container .pikBody .pikHead .nose {
    position: absolute;
    width: 10px;
    height: 11px;
    background: #0A0A0A;
    top: 75px;
    left: 40px;
    border-radius: 0 50% 30% 50%;
    transform: rotateZ(-36deg);
}
#demo2 .container .pikBody .pikHead .mouth {
    position: absolute;
    top: 90px;
    left: 48px;
    width: 25px;
    height: 20px;
    border-bottom: 4px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    border-radius: 0 0 100% 0;
    transform: rotateZ(55deg);
}
#demo2 .container .pikBody .pikHead .mouth::before {
    content: '';
    position: absolute;
    display: block;
    width: 22px;
    height: 15px;
    border-radius: 0 0 88% 0;
    border-bottom: 4px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    transform: rotateZ(-25deg);
    top: 20px;
    right: 15px;
}
#demo2 .container .pikBody .pikHead .cheekLeft {
    position: absolute;
    width: 30px;
    height: 70px;
    border-left: 4px solid #0A0A0A;
    background: #fed823;
    border-top-left-radius: 150% 90px;
    border-bottom-left-radius: 150% 90px;
    transform: rotateZ(-20deg);
    left: -10px;
    top: 81px;
}
#demo2 .container .pikBody .pikHead .cheekLeft::after {
    content: '';
    position: absolute;
    display: block;
    width: 23px;
    height: 40px;
    background: #e94e24;
    border-radius: 50%;
    transform: rotateZ(20deg);
    border-right: 3px solid #0A0A0A;
    border-top: 2px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    left: -4px;
}
#demo2 .container .pikBody .pikHead .cheekRight {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e94e24;
    border: 3px solid #0A0A0A;
    top: 90px;
    right: 18px;
}
#demo2 .container .pikBody .pikTrunk {
    position: absolute;
    width: 160px;
    height: 150px;
    border-top-right-radius: 70px 140px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 30px;
    border-bottom: 3px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    top: 165px;
    left: 30px;
    background: #fed823;
    z-index: 1;
}
#demo2 .container .pikBody .pikTrunk::before {
    position: absolute;
    content: '';
    display: block;
    width: 150px;
    height: 40px;
    background: #fed823;
    border-right: 3px solid #0A0A0A;
    transform: rotateZ(-8deg);
    right: 16px;
}
#demo2 .container .pikBody .pikTrunk::after {
    position: absolute;
    content: '';
    display: block;
    width: 70px;
    height: 100px;
    background: #fed823;
    border-left: 3px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
    border-radius: 90% 30% 0 80%;
    bottom: -2px;
    left: -20px;
}
#demo2 .container .pikBody .pikTrunk .neck {
    position: absolute;
    width: 80px;
    height: 10px;
    border-bottom: 2px solid #0A0A0A;
    background: #fed823;
    top: -10px;
    left: 30px;
}
#demo2 .container .pikBody .pikTrunk .backMark1 {
    position: absolute;
    width: 18px;
    height: 12px;
    background: #c76e29;
    border: 2px solid #0A0A0A;
    border-right: none;
    border-top-left-radius: 50px 100%;
    border-bottom-left-radius: 50px 100%;
    transform: rotateZ(-10deg);
    top: 27px;
    right: 13px;
    z-index: 4;
}
#demo2 .container .pikBody .pikTrunk .backMark2 {
    position: absolute;
    width: 28px;
    height: 19px;
    background: #c76e29;
    border: 2px solid #0A0A0A;
    border-right: none;
    border-top-left-radius: 100px 190%;
    border-bottom-left-radius: 50px 130%;
    transform: rotateZ(-10deg);
    top: 82px;
    right: 0;
    z-index: 3;
}
#demo2 .container .pikBody .pikTrunk .handLeft {
    position: absolute;
    width: 65px;
    height: 65px;
    border-left: 3px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
    border-radius: 70% 50% 80% 60%;
    background: #fed823;
    top: -10px;
    left: -20px;
    z-index: 5;
}
#demo2 .container .pikBody .pikTrunk .handLeft::before {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 10px;
    border-radius: 40%;
    border-top: 2px solid #0A0A0A;
    transform: rotateZ(17deg);
    top: 16px;
    left: 17px;
}
#demo2 .container .pikBody .pikTrunk .handRight {
    position: absolute;
    width: 85px;
    height: 65px;
    border-left: 3px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    border-radius: 150px 0 50px 50px/150% 0 70% 70%;
    background: #fed823;
    top: -5px;
    right: 45px;
    z-index: 10;
}
#demo2 .container .pikBody .footLeft {
    position: absolute;
    width: 70px;
    height: 30px;
    bottom: 0;
    border-radius: 75%;
    background: #fed823;
    transform: rotateZ(-18deg);
    border: 3px solid #0A0A0A;
}
#demo2 .container .pikBody .footLeft::before {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 6px;
    border-radius: 40%;
    transform: rotateZ(-15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 7px;
}
#demo2 .container .pikBody .footLeft::after {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 8px;
    border-radius: 50%;
    transform: rotateZ(-15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 11px;
    left: -1px;
}
#demo2 .container .pikBody .footRight {
    position: absolute;
    width: 70px;
    height: 27px;
    bottom: 0;
    right: -12px;
    border-radius: 85%;
    background: #fed823;
    transform: rotateZ(17deg);
    border-bottom: 3px solid #0A0A0A;
    border-left: 3px solid #0A0A0A;
    border-right: 2px solid #0A0A0A;
    border-top: 1px solid #0A0A0A;
}
#demo2 .container .pikBody .footRight::before {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 6px;
    border-radius: 40%;
    transform: rotateZ(15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 4px;
    right: 1px;
}
#demo2 .container .pikBody .footRight::after {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 8px;
    border-radius: 50%;
    transform: rotateZ(15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 8px;
    right: -1px;
}
#demo2 .container .pikTail {
    position: absolute;
    width: 150px;
    height: 250px;
    right: 0;
    top: 140px;
    transform-origin: 0 bottom;
    animation: tailMove 3s ease infinite;
}
#demo2 .container .pikTail .part1 {
    position: absolute;
    width: 60px;
    height: 15px;
    border-top: 2px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    background: #983c0d;
    bottom: 18px;
    transform: rotateZ(-50deg);
    z-index: 1;
}
#demo2 .container .pikTail .part2 {
    position: absolute;
    width: 50px;
    height: 18px;
    border-right: 2px solid #0A0A0A;
    background: #983c0d;
    bottom: 48px;
    left: 9px;
    transform: rotateZ(42deg);
    z-index: 2;
}
#demo2 .container .pikTail .part2::before {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 9px solid #fed823;
    border-right: 9px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    border-top: 5px solid rgba(0, 0, 0, 0);
    left: 15px;
    top: -1px;
}
#demo2 .container .pikTail .part2::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 9px solid #fed823;
    border-right: 9px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    border-top: 5px solid rgba(0, 0, 0, 0);
    left: 14px;
    top: 8px;
}
#demo2 .container .pikTail .part3 {
    position: absolute;
    width: 70px;
    height: 25px;
    background: #fed823;
    bottom: 78px;
    transform: rotateZ(-46deg);
    z-index: 3;
}
#demo2 .container .pikTail .part4 {
    position: absolute;
    width: 80px;
    height: 35px;
    background: #fed823;
    bottom: 105px;
    left: -10px;
    transform: rotateZ(47deg);
    z-index: 5;
}
#demo2 .container .pikTail .part5 {
    position: absolute;
    width: 150px;
    height: 85px;
    border-top-left-radius: 100% 30px;
    border-bottom-right-radius: 20% 10px;
    border-bottom-left-radius: 10% 10px;
    border-top: 3px solid #0A0A0A;
    border-left: 1px solid #0A0A0A;
    border-right: 2px solid #0A0A0A;
    background: #fed823;
    bottom: 142px;
    left: -16px;
    transform: rotateZ(-7deg);
    z-index: 4;
}
@keyframes tailMove {
    0% {transform: rotateZ(0deg)}
    50% {transform: rotateZ(15deg)}
    100% {transform: rotateZ(0deg)}
}
#demo2 .container .pikBody .pikHead .lightLeft {
    display: block;
    position: absolute;
    width: 140px;
    left: -130px;
    top: 70px;
    transform: rotateZ(150deg);
    z-index: 10;
}
#demo2 .container .pikBody .pikHead .lightRight {
    display: block;
    position: absolute;
    right: -100px;
    top: 85px;
    transform: rotateZ(-14deg);
    z-index: 10;
}
`
export default string