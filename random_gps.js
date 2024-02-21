// random_gps.js

function generateRandomGPS(baseLog, baseLat, radius) {
    // 将半径从米转换为经纬度度数
    const radiusInDegrees = radius / 111300;

    // 随机生成两个0到1之间的数
    const u = Math.random();
    const v = Math.random();

    // 计算新的经纬度坐标
    const w = radiusInDegrees * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    // 计算最终的经纬度
    const longitude = y + baseLog;
    const latitude = x + baseLat;

    // 保留小数点后6位
    const loga = longitude.toFixed(6);
    const lata = latitude.toFixed(6);

    return { longitude: loga, latitude: lata };
}

// 在以 (114.1747112313, 33.02654402131123123) 为中心，半径为 200 米的范围内生成 1 个随机经纬度坐标
const centerLongitude = 114.1747112313;
const centerLatitude = 33.02654402131123123;
const radiusMeters = 200;

for (let i = 0; i < 1; i++) {
    const { longitude, latitude } = generateRandomGPS(centerLongitude, centerLatitude, radiusMeters);
    console.log(`经度 ${i + 1}: ${longitude}, 纬度 ${i + 1}: ${latitude}`);
}
