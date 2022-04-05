class CommonData {
    static loginCheckUrl: string = "https://sindata.nira.one/";

    static vertxt = [`HIGH-VOLTAGE`];

    // 0: hv, 1: tbre, 2: mx, 3: ex, 4: nx
    static profUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/profile.html`,
    ];

    static musicUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music.html`,
    ]; // ?gtype &cat 추가해서 사용

    static skillUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/skill.html`,
    ]; // ?gtype &stype

    static favoUrl = `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/setting/favorite.html`;
    static boardUrl = `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/playerboard_img.html`;

    static uploadProfile = [
        `https://sindata.nira.one/$/updateProfile`,
        `https://sindata.nira.one/$/updateProfileOld`,
    ];

    static uploadSkill = [
        `https://sindata.nira.one/$/updateSkill`,
        `https://sindata.nira.one/$/updateSkillOld`,
    ];
}

export default CommonData;
