// https://apiv1.v27qae.com 的解析函数
module.exports.parse1 = async (raw, {axios, yaml, notify, console}, {name, url, interval, selected}) => {
  const obj = yaml.parse(raw);
  const proxyGroups = obj['proxy-groups'];
  const idx = proxyGroups.findIndex(({ name }) => name === '国外流量');
  if(idx > -1){
    const target = proxyGroups[idx];
    target.type = 'url-test';
    target.url = 'http://www.gstatic.com/generate_204';
    target.interval = 600;
    // proxyGroups.splice(idx, 1, target);
  }
  return yaml.stringify(obj);
}

// 清除服务商的 groups、rules 配置
module.exports.parse2 = (raw, { yaml }) => {
  const rawObj = yaml.parse(raw);
  const groups = [];
  const rules = [];
  return yaml.stringify({ ...rawObj, 'proxy-groups': groups, rules });
}

// * 通用解析函数
module.exports.parse3 = async (raw, {axios, yaml, notify, console}, {name, url, interval, selected}) => {
  const obj = yaml.parse(raw);
  const proxyGroups = obj['proxy-groups'];
  const idx = proxyGroups.findIndex(({ name }) => name === '国外流量');
  if(idx > -1){
    const target = proxyGroups[idx];
    target.type = 'url-test';
    target.url = 'http://www.gstatic.com/generate_204';
    target.interval = 600;
    // proxyGroups.splice(idx, 1, target);
  }
  return yaml.stringify(obj);
}
