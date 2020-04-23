function brutDinNet(net) {
    if (net < 519) {
        throw new Error("Salariul net specificat este prea mic. Nu se pot aplica formulele sistemului de taxe.")
    }
    const M1 = 1709402
    const m1 = 1541426
    const D1 = 1774359

    const I1 = 519
    const S1 = 29.27

    const M2 = 1801802
    const m2 = 1636249
    const D2 = 4294595

    const I2 = 1191
    const S2 = 26.53

    let ratio

    if (net < 1177) {
        const index = (net-I1)/S1
        ratio = M1 + 10000*(m1 - M1)/(10000 + 1000000000*index/D1)
    } else if (net < 2120) {
        const index = (net-I2)/S2
        ratio = M2 + 10000*(m2 - M2)/(10000 + 1000000000*index/D2)
    } else {
        ratio = M1 // Wow
    }

    return Math.floor(ratio * net / 1000000)
}

