document.addEventListener('DOMContentLoaded', () => {
    document.body.style.background = "url('kitchen.gif')";
    document.body.style.backgroundSize = "cover";
});
//str r2, .ClockISR
//mov r3, #1000
//str r3, .ClockInterruptFrequency
//mov r4, #1
//str r4, .InterruptRegister
//loop:
//add r0,r0,#1
//b loop
//tick_isr:
//add r12, r12, #1
//rfe

//mov r10,#300

//mov r0, #123
//mov r1,#10
//str r0,[r10]
//sub r10,r10,#4
//mov r0, #122
//str r0,[r10]
//sub r10,r10,#4
//str [r10],r0
//add r10,r10,#4
