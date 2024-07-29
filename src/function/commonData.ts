class CommonData {
    static loginCheckUrl: string = "https://sindata.nira.one/";

    static vertxt = [`GALAXY WAVE`, `FUZZUP`, `HIGH-VOLTAGE`];

    // 0: gw, 1: fu, 2: hv
    static profUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/playdata/profile.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/playdata/profile.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/profile.html`,
    ];

    static musicUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/playdata/music.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/playdata/music.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/music.html`,
    ]; // ?gtype &cat 추가해서 사용

    static skillUrl = [
        `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/playdata/skill.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_fuzzup/p/playdata/skill.html`,
        `https://p.eagate.573.jp/game/gfdm/gitadora_highvoltage/p/playdata/skill.html`,
    ]; // ?gtype &stype

    static favoUrl1 = `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/setting/favorite1.html`;
    static favoUrl2 = `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/setting/favorite2.html`;
    static favoUrl3 = `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/setting/favorite3.html`;

    static favoUrl = `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/setting/favorite.html`;
    static boardUrl = `https://p.eagate.573.jp/game/gfdm/gitadora_galaxywave/p/playdata/playerboard_img.html`;

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
