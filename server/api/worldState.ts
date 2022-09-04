export default defineEventHandler(async (event) => {
  interface data {
    timestanp: String;
    alerts: any;
    arbitration: Object;
    cambionCycle: Object;
    cetusCycle: Object;
    conclaveChallenges: any;
    constructionProgress: any;
    dailyDeals: Object;
    darkSectors: any;
    earthCycle: Object;
    events: any;
    fissures: any;
    flashSales: any;
    globalUpgrades: any;
    invasions: any;
    kuva: any;
    news: any;
    nightwave: Object;
    persistentEnemies: any;
    simaris: Object;
    sortie: Object;
    steelPath: Object;
    syndicateMissions: any;
    vallisCycle: Object;
    voidTrader: Object;
  }

  const data: data = await $fetch("https://api.warframestat.us/pc", {
    method: "get",
  });

  return {
    news: data.news,
    timestanp: data.timestanp,
    alerts: data.alerts,
    arbitration: data.arbitration,
    cambionCycle: data.cambionCycle,
    cetusCycle: data.cetusCycle,
    conclaveChallenges: data.conclaveChallenges,
    constructionProgress: data.constructionProgress,
    dailyDeals: data.dailyDeals,
    darkSectors: data.darkSectors,
    earthCycle: data.earthCycle,
    events: data.events,
    fissures: data.fissures,
    flashSales: data.flashSales,
    globalUpgrades: data.globalUpgrades,
    invasions: data.invasions,
    kuva: data.kuva,
    nightwave: data.nightwave,
    persistentEnemies: data.persistentEnemies,
    simaris: data.simaris,
    sortie: data.sortie,
    steelPath: data.steelPath,
    syndicateMissions: data.syndicateMissions,
    vallisCycle: data.vallisCycle,
    voidTrader: data.voidTrader,
  };
});
