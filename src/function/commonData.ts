class CommonData {
    static loginCheckUrl: string = "https://sindata.nira.one/";

    static vertxt = [`FUZZUP`, `HIGH-VOLTAGE`];

    // 0: fu, 1: hv
    static profUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/playdata/profile.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/profile.html`,
    ];

    static musicUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/playdata/music.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music.html`,
    ]; // ?gtype &cat 추가해서 사용

    static skillUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/playdata/skill.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/skill.html`,
    ]; // ?gtype &stype

    static favoUrl = `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/setting/favorite.html`;
    static boardUrl = `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/playdata/playerboard_img.html`;

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
