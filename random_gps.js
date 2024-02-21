
// random_gps.js

function generateRandomGPS() {
    // 生成随机经纬度坐标，你可以根据需要进行调整
    const longitude = 114.057456 + (Math.random() - 0.5) * 0.004; // 200米范围内的随机经度
    const latitude = 22.54456 + (Math.random() - 0.5) * 0.004; // 200米范围内的随机纬度

    return { longitude, latitude };
}

// 获取随机经纬度坐标
const { longitude, latitude } = generateRandomGPS();

// 替换请求包中的 locations 值
$done({ body: $request.body.replace(/"locations":\[\{"lng":\d+\.\d+,"lat":\d+\.\d+\}\]/, `"locations":[{"lng":${longitude},"lat":${latitude}}]`) });
