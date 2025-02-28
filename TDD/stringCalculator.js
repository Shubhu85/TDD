function add(numbers) {
    if (!numbers) return 0;
    
    const delimiter = numbers.startsWith('//') ? numbers.charAt(2) : ',';
    const nums = numbers.split(/\n|,|;/).map(num => parseInt(num)).filter(num => !isNaN(num));
    
    const negatives = nums.filter(num => num < 0);
    if (negatives.length) throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };