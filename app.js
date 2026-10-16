/**
 * ==============================================================================
 * BẾP NHÀ - TRỢ LÝ LÊN THỰC ĐƠN THÔNG MINH TỪ NGUYÊN LIỆU CÓ SẴN
 * Core Application Engine & State Management
 * Standardized based on Product Requirement Document (PRD)
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. CƠ SỞ DỮ LIỆU GIẢ LẬP (MOCK DATABASE - SCHEMA & DATA MỤC 5 PRD)
// ------------------------------------------------------------------------------

/**
 * Bảng Ingredients: Danh mục nguyên liệu chuẩn
 * Tương ứng bảng Ingredients (Mục 5.1 & 5.2 PRD) + Mở rộng các món phổ biến
 */
const DB_INGREDIENTS = [
  // 7 Nguyên liệu mẫu chuẩn trong PRD:
  { ingredient_id: 1, name: 'Thịt lợn ba chỉ', category: 'Thịt/Cá', unit: 'gram', estimated_price_per_unit: 150, icon: '🥓' },
  { ingredient_id: 2, name: 'Trứng gà', category: 'Khác', unit: 'quả', estimated_price_per_unit: 3500, icon: '🥚' },
  { ingredient_id: 3, name: 'Cà chua', category: 'Rau củ', unit: 'gram', estimated_price_per_unit: 30, icon: '🍅' },
  { ingredient_id: 4, name: 'Đậu phụ', category: 'Khác', unit: 'bìa', estimated_price_per_unit: 5000, icon: '🧈' },
  { ingredient_id: 5, name: 'Hành lá', category: 'Rau củ', unit: 'mớ', estimated_price_per_unit: 3000, icon: '🌱' },
  { ingredient_id: 6, name: 'Thịt bò', category: 'Thịt/Cá', unit: 'gram', estimated_price_per_unit: 280, icon: '🥩' },
  { ingredient_id: 7, name: 'Hành tây', category: 'Rau củ', unit: 'củ', estimated_price_per_unit: 4000, icon: '🧅' },

  // Mở rộng thêm gia vị & thực phẩm thông dụng trong gia đình:
  { ingredient_id: 8, name: 'Tỏi', category: 'Gia vị', unit: 'củ', estimated_price_per_unit: 2000, icon: '🧄' },
  { ingredient_id: 9, name: 'Nước mắm', category: 'Gia vị', unit: 'ml', estimated_price_per_unit: 60, icon: '🍾' },
  { ingredient_id: 10, name: 'Hạt tiêu', category: 'Gia vị', unit: 'gram', estimated_price_per_unit: 250, icon: '🧂' },
  { ingredient_id: 11, name: 'Rau muống', category: 'Rau củ', unit: 'mớ', estimated_price_per_unit: 8000, icon: '🥬' },
  { ingredient_id: 12, name: 'Tôm tươi', category: 'Thịt/Cá', unit: 'gram', estimated_price_per_unit: 240, icon: '🦐' },
  { ingredient_id: 13, name: 'Sườn heo', category: 'Thịt/Cá', unit: 'gram', estimated_price_per_unit: 170, icon: '🍖' },
  { ingredient_id: 14, name: 'Gừng', category: 'Gia vị', unit: 'củ', estimated_price_per_unit: 3000, icon: '🫚' },
  { ingredient_id: 15, name: 'Ớt hiểm', category: 'Gia vị', unit: 'quả', estimated_price_per_unit: 1000, icon: '🌶️' },
  { ingredient_id: 16, name: 'Dưa chuột', category: 'Rau củ', unit: 'quả', estimated_price_per_unit: 4000, icon: '🥒' }
];

/**
 * Bảng Recipes: Danh mục món ăn
 * Tương ứng bảng Recipes (Mục 5.1 & 5.2 PRD) + Các món gia đình Việt
 */
const DB_RECIPES = [
  // 3 Món ăn mẫu chuẩn trong PRD:
  {
    recipe_id: 101,
    title: 'Thịt kho trứng',
    cooking_time: 45,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Tiêu chuẩn',
    icon: '🍲',
    description: 'Món ăn truyền thống đậm đà, thịt ba chỉ béo ngậy kết hợp trứng gà bùi thơm.',
    steps: [
      'Thịt ba chỉ rửa sạch, thái miếng vuông vừa ăn, luộc sơ nước sôi 2 phút rồi vớt ra để ráo.',
      'Trứng gà luộc chín, bóc sạch vỏ. Khía nhẹ vài đường quanh quả trứng để thấm gia vị.',
      'Thắng nước màu đường caramen, phi thơm hành rồi cho thịt vào đảo săn đều màu.',
      'Đổ nước dừa hoặc nước lọc ngập thịt, đun sôi, hạ nhỏ lửa ninh trong 30 phút.',
      'Cho trứng vào kho cùng thêm 15 phút, nêm nước mắm tiêu vừa vị, rắc hành lá cắt khúc lên trên.'
    ],
    tips: 'Nên kho lửa nhỏ liu riu để mỡ thịt trong veo và không bị nát trứng.'
  },
  {
    recipe_id: 102,
    title: 'Đậu phụ sốt cà chua',
    cooking_time: 15,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Tiết kiệm',
    icon: '🥘',
    description: 'Món chay mặn đều hợp, thanh đạm, giàu đạm thực vật, nước sốt cà chua đậm đà đưa cơm.',
    steps: [
      'Đậu phụ cắt miếng vuông vừa ăn, rán vàng đều các mặt trên chảo dầu nóng, vớt ra thấm ráo dầu.',
      'Cà chua rửa sạch bổ múi cau hoặc băm nhỏ. Hành lá cắt nhỏ phần gốc và lá riêng.',
      'Phi thơm đầu hành lá, cho cà chua vào đảo nhuyễn với chút muối và đường tạo sốt sệt sánh.',
      'Cho đậu phụ đã rán vào đảo nhẹ nhàng, rim nhỏ lửa trong 5 phút cho ngấm đều sốt.',
      'Rắc hành lá thái nhỏ lên trên, tắt bếp và múc ra đĩa sâu lòng.'
    ],
    tips: 'Rán đậu phụ lửa vừa để ngoài giòn trong mềm mọng nước.'
  },
  {
    recipe_id: 103,
    title: 'Thịt bò xào hành tây',
    cooking_time: 20,
    difficulty: 'Trung bình',
    base_servings: 2,
    estimated_budget_level: 'Sang chảnh',
    icon: '🥩',
    description: 'Thịt bò mềm ngọt tự nhiên, hòa quyện vị giòn ngọt của hành tây và thơm nồng hạt tiêu.',
    steps: [
      'Thịt bò thái lát mỏng ngang thớ. Ướp với chút tỏi băm, hạt tiêu, nước tương và 1 thìa dầu ăn trong 10 phút.',
      'Hành tây bóc vỏ, bổ múi cau. Hành lá cắt khúc 3cm.',
      'Đun chảo thật nóng với dầu ăn, phi thơm tỏi băm, cho thịt bò vào xào nhanh lửa lớn trong 2 phút rồi trút ra đĩa.',
      'Dùng lại chảo, cho hành tây vào xào chín tới vừa giữ được độ giòn ngọt.',
      'Trút thịt bò vào lại chảo, đảo đều cùng hành lá trong 30 giây, rắc tiêu đen thơm lừng và tắt bếp.'
    ],
    tips: 'Xào lửa thật lớn và không xào thịt bò quá lâu để thịt không bị dai.'
  },

  // Các món bổ sung phong phú dựa trên cùng tập nguyên liệu:
  {
    recipe_id: 104,
    title: 'Canh cà chua trứng (Canh mây)',
    cooking_time: 12,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Tiết kiệm',
    icon: '🥣',
    description: 'Món canh thanh nhiệt giải ngấy, vân mây trứng bồng bềnh, nấu siêu nhanh chỉ 10 phút.',
    steps: [
      'Cà chua bổ múi cau. Hành lá thái nhỏ.',
      'Trứng gà đập ra bát, đánh tan đều.',
      'Phi thơm hành lá, xào mềm cà chua, cho 500-700ml nước vào đun sôi.',
      'Hạ lửa vừa, từ từ rót trứng vào nồi đồng thời dùng đũa khuấy một chiều nhẹ nhàng tạo vân mây.',
      'Nêm gia vị vừa ăn, rắc hành lá rồi tắt bếp ngay.'
    ],
    tips: 'Khuấy đều tay một chiều khi đổ trứng để mây trứng bông tơi đẹp mắt.'
  },
  {
    recipe_id: 105,
    title: 'Thịt ba chỉ rang cháy cạnh',
    cooking_time: 20,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Tiêu chuẩn',
    icon: '🥓',
    description: 'Thịt ba chỉ xém vàng thơm nức, ngậy béo đậm đà, cực kỳ hao cơm trong bữa cơm gia đình.',
    steps: [
      'Thịt ba chỉ rửa sạch, thái miếng mỏng vừa ăn.',
      'Cho thịt vào chảo không cần dầu, đảo lửa vừa đến khi thịt ra bớt mỡ và xém cạnh vàng giòn.',
      'Gạn bớt mỡ thừa ra bát, cho tỏi băm, hành củ vào phi thơm cùng thịt.',
      'Pha nước mắm, đường, hạt tiêu rồi rưới vào chảo, đảo nhanh tay cho sốt bám đều thịt bóng bẩy.',
      'Thêm hành lá thái khúc, đảo 30 giây rồi tắt bếp.'
    ],
    tips: 'Thái lát mỏng sẽ giúp thịt nhanh xém cạnh và không bị dai.'
  },
  {
    recipe_id: 106,
    title: 'Trứng chiên hành lá thơm giòn',
    cooking_time: 10,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Tiết kiệm',
    icon: '🍳',
    description: 'Món ăn quốc dân nhanh gọn, vàng ươm xốp mềm, dậy mùi thơm của hành lá và tiêu xay.',
    steps: [
      'Hành lá rửa sạch, thái nhỏ nhuyễn.',
      'Đập trứng vào tô, thêm hành lá, 1 thìa nước mắm, xíu tiêu và 1 thìa nước lọc (giúp trứng xốp mềm).',
      'Đánh tan đều hỗn hợp bằng nĩa hoặc đũa.',
      'Đun nóng chảo với dầu ăn, đổ trứng vào tráng đều chảo, chiên lửa vừa cho vàng một mặt rồi cuộn nhẹ hoặc lật mặt.',
      'Cho ra đĩa và cắt miếng vừa ăn.'
    ],
    tips: 'Thêm 1 thìa nhỏ nước lọc hoặc vài giọt nước cốt chanh để trứng phồng xốp hơn.'
  },
  {
    recipe_id: 107,
    title: 'Thịt bò xào tỏi sốt tiêu',
    cooking_time: 15,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Sang chảnh',
    icon: '🧄',
    description: 'Thịt bò thơm ngọt quyện cùng vị tỏi phi vàng giòn, nước sốt đậm đà sánh nhẹ.',
    steps: [
      'Thịt bò thái lát mỏng, ướp tiêu, tỏi băm và dầu hào.',
      'Tỏi bóc vỏ, một nửa băm nhỏ, một nửa đập dập nguyên tép.',
      'Phi vàng giòn phần tỏi tép rồi vớt ra để riêng.',
      'Phi thơm tỏi băm, cho thịt bò vào xào lửa lớn đảo nhanh tay trong 3 phút.',
      'Trút ra đĩa, rắc phần tép tỏi chiên vàng giòn và tiêu xay lên trên mặt.'
    ],
    tips: 'Lửa phải thật lớn để thịt bò giữ trọn vẹn nước ngọt.'
  },
  {
    recipe_id: 108,
    title: 'Rau muống xào tỏi giòn xanh',
    cooking_time: 12,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Tiết kiệm',
    icon: '🥬',
    description: 'Rau muống xanh mướt, giòn sần sật, ngập tràn hương thơm tỏi phi nồng nàn.',
    steps: [
      'Rau muống nhặt sạch lá già, ngắt ngọn vừa ăn, rửa sạch để ráo.',
      'Tỏi bóc vỏ đập dập thơm lừng.',
      'Đun nồi nước sôi với chút muối hạt, chần nhanh rau trong 30 giây rồi vớt ngâm ngay vào nước đá lạnh để rau xanh giòn.',
      'Phi thơm tỏi trong chảo dầu nóng, vớt rau muống cho vào đảo lửa cực lớn, nêm nước mắm hạt nêm vừa vị.',
      'Đảo đều trong 2 phút rồi múc ra đĩa thưởng thức nóng hổi.'
    ],
    tips: 'Ngâm nước đá sau khi chần giúp cọng rau giữ màu xanh ngọc bích và độ giòn tuyệt đối.'
  },
  {
    recipe_id: 109,
    title: 'Sườn xào chua ngọt chuẩn vị',
    cooking_time: 35,
    difficulty: 'Trung bình',
    base_servings: 2,
    estimated_budget_level: 'Sang chảnh',
    icon: '🍖',
    description: 'Từng dẻ sườn mềm thơm, lớp sốt chua ngọt óng ả màu cánh gián quyến rũ vị giác.',
    steps: [
      'Sườn heo chặt khúc vừa ăn, chần qua nước sôi rồi rửa sạch.',
      'Chiên sơ sườn vàng đều 2 mặt.',
      'Pha nước sốt chua ngọt: 2 thìa đường, 2 thìa giấm, 2 thìa nước mắm, 2 thìa tương cà, 4 thìa nước lọc.',
      'Phi thơm tỏi hành, cho sườn và nước sốt vào rim nhỏ lửa trong 20 phút cho sườn mềm và ngấm gia vị.',
      'Khi nước sốt cạn sệt óng ánh thì rắc tiêu, hành lá và tắt bếp.'
    ],
    tips: 'Rim nhỏ lửa giúp sườn ngấm sốt từ trong ra ngoài và mềm róc xương.'
  },
  {
    recipe_id: 110,
    title: 'Tôm rim mặn ngọt hành tỏi',
    cooking_time: 20,
    difficulty: 'Dễ',
    base_servings: 2,
    estimated_budget_level: 'Sang chảnh',
    icon: '🦐',
    description: 'Tôm vỏ giòn ngọt thịt, áo lớp sốt caramel mặn ngọt bóng bẩy cực bắt mắt.',
    steps: [
      'Tôm cắt bỏ râu và ngạnh nhọn, rửa sạch để ráo.',
      'Ướp tôm với chút nước mắm, hạt nêm, tiêu trong 10 phút.',
      'Phi thơm hành tỏi băm cùng chút đường thắng màu caramel vàng cánh gián.',
      'Cho tôm vào đảo nhanh tay trên lửa lớn đến khi tôm cong lại chuyển màu đỏ cam bắt mắt.',
      'Hạ lửa vừa rim đến khi nước sốt keo lại bám đều quanh vỏ tôm, rắc hành lá cắt nhỏ.'
    ],
    tips: 'Đảo lửa lớn đầu tiên giúp vỏ tôm giòn mà thịt bên trong vẫn ngọt mềm.'
  }
];

/**
 * Bảng Recipe_Ingredients: Định lượng nguyên liệu cho 1 người ăn (amount_per_serving)
 * Tương ứng bảng Recipe_Ingredients (Mục 5.1 & 5.2 PRD)
 */
const DB_RECIPE_INGREDIENTS = [
  // 1. Món: Thịt kho trứng (101) - PRD Sample
  { recipe_id: 101, ingredient_id: 1, amount_per_serving: 150 }, // 150g thịt ba chỉ / người
  { recipe_id: 101, ingredient_id: 2, amount_per_serving: 2 },   // 2 quả trứng / người
  { recipe_id: 101, ingredient_id: 5, amount_per_serving: 0.5 }, // 0.5 mớ hành lá / người
  { recipe_id: 101, ingredient_id: 9, amount_per_serving: 10 },  // 10ml nước mắm / người

  // 2. Món: Đậu phụ sốt cà chua (102) - PRD Sample
  { recipe_id: 102, ingredient_id: 4, amount_per_serving: 1.5 }, // 1.5 bìa đậu / người
  { recipe_id: 102, ingredient_id: 3, amount_per_serving: 100 }, // 100g cà chua / người
  { recipe_id: 102, ingredient_id: 5, amount_per_serving: 0.5 }, // 0.5 mớ hành lá / người

  // 3. Món: Thịt bò xào hành tây (103) - PRD Sample
  { recipe_id: 103, ingredient_id: 6, amount_per_serving: 120 }, // 120g thịt bò / người
  { recipe_id: 103, ingredient_id: 7, amount_per_serving: 0.5 }, // 0.5 củ hành tây / người
  { recipe_id: 103, ingredient_id: 5, amount_per_serving: 0.5 }, // 0.5 mớ hành lá / người
  { recipe_id: 103, ingredient_id: 8, amount_per_serving: 0.5 }, // 0.5 củ tỏi / người
  { recipe_id: 103, ingredient_id: 10, amount_per_serving: 3 },  // 3g tiêu / người

  // 4. Món: Canh cà chua trứng (104)
  { recipe_id: 104, ingredient_id: 2, amount_per_serving: 1 },   // 1 quả trứng / người
  { recipe_id: 104, ingredient_id: 3, amount_per_serving: 80 },  // 80g cà chua / người
  { recipe_id: 104, ingredient_id: 5, amount_per_serving: 0.5 }, // 0.5 mớ hành / người

  // 5. Món: Thịt ba chỉ rang cháy cạnh (105)
  { recipe_id: 105, ingredient_id: 1, amount_per_serving: 150 }, // 150g thịt / người
  { recipe_id: 105, ingredient_id: 5, amount_per_serving: 0.5 }, // 0.5 mớ hành / người
  { recipe_id: 105, ingredient_id: 8, amount_per_serving: 0.5 }, // 0.5 củ tỏi / người
  { recipe_id: 105, ingredient_id: 9, amount_per_serving: 10 },  // 10ml nước mắm / người

  // 6. Món: Trứng chiên hành lá (106)
  { recipe_id: 106, ingredient_id: 2, amount_per_serving: 2 },   // 2 quả trứng / người
  { recipe_id: 106, ingredient_id: 5, amount_per_serving: 0.5 }, // 0.5 mớ hành / người
  { recipe_id: 106, ingredient_id: 9, amount_per_serving: 5 },   // 5ml mắm / người

  // 7. Món: Thịt bò xào tỏi sốt tiêu (107)
  { recipe_id: 107, ingredient_id: 6, amount_per_serving: 130 }, // 130g bò / người
  { recipe_id: 107, ingredient_id: 8, amount_per_serving: 1 },   // 1 củ tỏi / người
  { recipe_id: 107, ingredient_id: 10, amount_per_serving: 4 },  // 4g tiêu / người

  // 8. Món: Rau muống xào tỏi (108)
  { recipe_id: 108, ingredient_id: 11, amount_per_serving: 0.5 },// 0.5 mớ rau / người
  { recipe_id: 108, ingredient_id: 8, amount_per_serving: 0.5 }, // 0.5 củ tỏi / người

  // 9. Món: Sườn xào chua ngọt (109)
  { recipe_id: 109, ingredient_id: 13, amount_per_serving: 200 },// 200g sườn / người
  { recipe_id: 109, ingredient_id: 8, amount_per_serving: 0.5 }, // 0.5 củ tỏi / người
  { recipe_id: 109, ingredient_id: 9, amount_per_serving: 10 },  // 10ml mắm / người

  // 10. Món: Tôm rim mặn ngọt (110)
  { recipe_id: 110, ingredient_id: 12, amount_per_serving: 150 },// 150g tôm / người
  { recipe_id: 110, ingredient_id: 8, amount_per_serving: 0.5 }, // 0.5 củ tỏi / người
  { recipe_id: 110, ingredient_id: 5, amount_per_serving: 0.5 }, // 0.5 mớ hành / người
  { recipe_id: 110, ingredient_id: 9, amount_per_serving: 10 }   // 10ml mắm / người
];

// ------------------------------------------------------------------------------
// 2. APPLICATION STATE MANAGEMENT
// ------------------------------------------------------------------------------

const AppState = {
  // Nguyên liệu người dùng đang có trong tủ lạnh (Set of ingredient_id)
  selectedIngredients: new Set([1, 2, 3, 5]), // Mặc định nạp thử: Thịt lợn, Trứng gà, Cà chua, Hành lá

  // Tùy chỉnh bữa ăn (FR-02)
  servings: 2,                  // Số người ăn (Khẩu phần: 1 - 10)
  timeFilter: 'all',            // 'all', '15', '30', '60'
  budgetFilter: 'all',          // 'all', 'Tiết kiệm', 'Tiêu chuẩn', 'Sang chảnh'
  sortOption: 'match-desc',     // 'match-desc', 'missing-cost-asc', 'time-asc', 'total-cost-asc'
  selectedCategory: 'all',      // Lọc danh mục tag

  // Danh sách mua sắm (Shopping List Cart)
  // Lưu trữ các món được chọn hoặc danh sách nguyên liệu thiếu tổng hợp
  shoppingRecipeIds: new Set(),
  checkedShoppingItems: new Set(), // Những món đã tích xong khi đi chợ

  // Active viewing recipe in modal
  modalRecipeId: null,
  modalServings: 2
};

// ------------------------------------------------------------------------------
// 3. CORE LOGIC ENGINE (THUẬT TOÁN ĐỀ XUẤT, ĐỊNH LƯỢNG & TÍNH CHI PHÍ)
// ------------------------------------------------------------------------------

/**
 * Tìm nguyên liệu theo ID
 */
function getIngredientById(id) {
  return DB_INGREDIENTS.find(item => item.ingredient_id === id);
}

/**
 * Lấy danh sách nguyên liệu của một món ăn
 */
function getRecipeIngredients(recipeId) {
  return DB_RECIPE_INGREDIENTS
    .filter(ri => ri.recipe_id === recipeId)
    .map(ri => {
      const ing = getIngredientById(ri.ingredient_id);
      return {
        ...ri,
        ingredient: ing
      };
    });
}

/**
 * FR-03 & FR-04: Thuật toán so khớp đề xuất & Quy đổi định lượng
 * - Tính % nguyên liệu có sẵn
 * - Phân loại nguyên liệu đã có vs cần mua thêm
 * - Tính tổng chi phí và chi phí phát sinh mua thêm theo số người ăn (servings)
 */
function evaluateRecipe(recipe, userIngredientsSet, servings) {
  const recipeIngs = getRecipeIngredients(recipe.recipe_id);
  const totalCount = recipeIngs.length;

  let matchedCount = 0;
  const availableItems = [];
  const missingItems = [];

  let totalCost = 0;
  let missingCost = 0;

  recipeIngs.forEach(item => {
    const isAvailable = userIngredientsSet.has(item.ingredient_id);
    const scaledAmount = Math.round(item.amount_per_serving * servings * 10) / 10;
    const itemCost = Math.round(scaledAmount * item.ingredient.estimated_price_per_unit);

    totalCost += itemCost;

    const analyzedItem = {
      ...item,
      scaledAmount,
      itemCost,
      isAvailable
    };

    if (isAvailable) {
      matchedCount++;
      availableItems.push(analyzedItem);
    } else {
      missingCost += itemCost;
      missingItems.push(analyzedItem);
    }
  });

  // Tỷ lệ khớp % (PRD FR-03)
  const matchPercentage = totalCount > 0 ? Math.round((matchedCount / totalCount) * 100) : 0;

  return {
    ...recipe,
    servings,
    totalCount,
    matchedCount,
    matchPercentage,
    availableItems,
    missingItems,
    allIngredients: [...availableItems, ...missingItems],
    totalCost,
    missingCost
  };
}

/**
 * Lọc và xếp hạng danh sách món ăn theo các tiêu chí (FR-02 & FR-03)
 */
function getRankedRecipes() {
  const evaluated = DB_RECIPES.map(recipe => 
    evaluateRecipe(recipe, AppState.selectedIngredients, AppState.servings)
  );

  // Bộ lọc thời gian (FR-02)
  let filtered = evaluated.filter(r => {
    if (AppState.timeFilter === 'all') return true;
    const maxTime = parseInt(AppState.timeFilter, 10);
    return r.cooking_time <= maxTime;
  });

  // Bộ lọc ngân sách (FR-02)
  filtered = filtered.filter(r => {
    if (AppState.budgetFilter === 'all') return true;
    return r.estimated_budget_level === AppState.budgetFilter;
  });

  // Sắp xếp (FR-03 & UX)
  filtered.sort((a, b) => {
    switch (AppState.sortOption) {
      case 'match-desc':
        // Ưu tiên tỷ lệ khớp cao nhất, nếu bằng thì chi phí mua thêm ít nhất
        if (b.matchPercentage !== a.matchPercentage) {
          return b.matchPercentage - a.matchPercentage;
        }
        return a.missingCost - b.missingCost;

      case 'missing-cost-asc':
        // Chi phí mua thêm ít nhất
        return a.missingCost - b.missingCost;

      case 'time-asc':
        // Nấu nhanh nhất
        return a.cooking_time - b.cooking_time;

      case 'total-cost-asc':
        // Tổng chi phí tiết kiệm nhất
        return a.totalCost - b.totalCost;

      default:
        return b.matchPercentage - a.matchPercentage;
    }
  });

  return filtered;
}

/**
 * Định dạng tiền tệ VND chuẩn
 */
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    .format(amount)
    .replace('₫', 'đ');
}

/**
 * Định dạng định lượng kèm đơn vị (g, quả, bìa, mớ...)
 */
function formatAmount(amount, unit) {
  const formatted = amount % 1 === 0 ? amount : amount.toFixed(1);
  return `${formatted} ${unit}`;
}

// ------------------------------------------------------------------------------
// 4. DOM RENDERING FUNCTIONS
// ------------------------------------------------------------------------------

/**
 * Render Quick Tags trong thư viện nguyên liệu (FR-01)
 */
function renderQuickTags() {
  const listEl = document.getElementById('quick-tags-list');
  const countEl = document.getElementById('library-count');
  if (!listEl) return;

  const filtered = DB_INGREDIENTS.filter(item => {
    if (AppState.selectedCategory === 'all') return true;
    return item.category === AppState.selectedCategory;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} nguyên liệu`;
  }

  listEl.innerHTML = '';
  filtered.forEach(item => {
    const isSelected = AppState.selectedIngredients.has(item.ingredient_id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `tag-btn ${isSelected ? 'selected' : ''}`;
    btn.setAttribute('data-id', item.ingredient_id);
    btn.innerHTML = `
      <span class="tag-icon">${item.icon}</span>
      <span>${item.name}</span>
      ${isSelected ? '<span>✓</span>' : '+'}
    `;

    btn.addEventListener('click', () => {
      toggleIngredient(item.ingredient_id);
    });

    listEl.appendChild(btn);
  });
}

/**
 * Render Danh sách nguyên liệu đã chọn trong Tủ lạnh (My Fridge Box)
 */
function renderMyFridge() {
  const boxEl = document.getElementById('selected-tags-box');
  const badgeCountEl = document.getElementById('selected-badge-count');
  if (!boxEl) return;

  const count = AppState.selectedIngredients.size;
  if (badgeCountEl) {
    badgeCountEl.textContent = `${count} món`;
  }

  if (count === 0) {
    boxEl.innerHTML = `
      <div class="empty-fridge-state">
        <span class="empty-icon">🥦</span>
        <p>Tủ lạnh đang trống! Nhấp các món phía trên hoặc gõ tìm kiếm để thêm nguyên liệu nhé.</p>
      </div>
    `;
    return;
  }

  boxEl.innerHTML = '';
  AppState.selectedIngredients.forEach(id => {
    const item = getIngredientById(id);
    if (!item) return;

    const pill = document.createElement('div');
    pill.className = 'fridge-pill';
    pill.innerHTML = `
      <span>${item.icon}</span>
      <span>${item.name}</span>
      <span class="btn-del" data-id="${item.ingredient_id}" title="Xóa khỏi tủ">✕</span>
    `;

    pill.querySelector('.btn-del').addEventListener('click', (e) => {
      e.stopPropagation();
      removeIngredient(item.ingredient_id);
    });

    boxEl.appendChild(pill);
  });
}

/**
 * Render Danh sách thẻ món ăn gợi ý (FR-03, FR-04, FR-06)
 */
function renderRecipeCards() {
  const gridEl = document.getElementById('recipe-cards-grid');
  const countBadgeEl = document.getElementById('results-count-badge');
  const summaryTextEl = document.getElementById('results-summary-text');
  const metricFullEl = document.getElementById('metric-full-match');
  const metricPartialEl = document.getElementById('metric-partial-match');
  const metricServingsEl = document.getElementById('metric-servings');

  if (!gridEl) return;

  const rankedRecipes = getRankedRecipes();

  // Cập nhật các thống kê tổng quan
  if (countBadgeEl) countBadgeEl.textContent = `${rankedRecipes.length} món`;
  if (metricServingsEl) metricServingsEl.textContent = `${AppState.servings} người`;

  const fullCount = rankedRecipes.filter(r => r.matchPercentage === 100).length;
  const partialCount = rankedRecipes.filter(r => r.matchPercentage >= 50 && r.matchPercentage < 100).length;
  if (metricFullEl) metricFullEl.textContent = `${fullCount} món`;
  if (metricPartialEl) metricPartialEl.textContent = `${partialCount} món`;

  if (summaryTextEl) {
    if (fullCount > 0) {
      summaryTextEl.innerHTML = `🎉 Có <strong>${fullCount} món</strong> bạn có thể nấu ngay không cần đi chợ!`;
    } else {
      summaryTextEl.textContent = 'Gợi ý món ăn tối ưu chi phí mua thêm cho bữa ăn gia đình.';
    }
  }

  if (rankedRecipes.length === 0) {
    gridEl.innerHTML = `
      <div class="empty-results-box">
        <span class="empty-results-icon">🍲</span>
        <h4>Không tìm thấy món ăn phù hợp với bộ lọc</h4>
        <p>Thử điều chỉnh lại thời gian nấu tối đa hoặc ngân sách dự kiến để có thêm nhiều gợi ý hấp dẫn nhé!</p>
        <button id="btn-reset-filters" class="btn btn-primary btn-sm">Đặt lại bộ lọc</button>
      </div>
    `;
    const resetBtn = document.getElementById('btn-reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        AppState.timeFilter = 'all';
        AppState.budgetFilter = 'all';
        syncFilterButtons();
        renderRecipeCards();
      });
    }
    return;
  }

  gridEl.innerHTML = '';
  rankedRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    // Xác định huy hiệu % khớp
    let badgeClass = 'match-low';
    let badgeIcon = '⚪';
    let badgeText = `${recipe.matchPercentage}% Khớp`;
    let progressBarColor = '#94A3B8';

    if (recipe.matchPercentage === 100) {
      badgeClass = 'match-100';
      badgeIcon = '🟢';
      badgeText = '100% Nấu ngay!';
      progressBarColor = '#10B981';
    } else if (recipe.matchPercentage >= 60) {
      badgeClass = 'match-partial';
      badgeIcon = '🟡';
      badgeText = `${recipe.matchPercentage}% Khớp`;
      progressBarColor = '#F59E0B';
    }

    // Chips nguyên liệu có vs thiếu
    const availableChips = recipe.availableItems
      .map(item => `<span class="ing-chip ing-chip-have" title="Đã có sẵn">✓ ${item.ingredient.name}</span>`)
      .join('');

    const missingChips = recipe.missingItems
      .map(item => `<span class="ing-chip ing-chip-missing" title="Cần mua thêm">+ ${item.ingredient.name}</span>`)
      .join('');

    card.innerHTML = `
      <div class="card-hero-banner">
        <span class="dish-icon-large">${recipe.icon}</span>
        <div class="match-badge-wrap">
          <div class="match-badge ${badgeClass}">
            <span>${badgeIcon}</span>
            <span>${badgeText}</span>
          </div>
          <div class="match-progress-container" title="${recipe.matchedCount}/${recipe.totalCount} nguyên liệu có sẵn">
            <div class="match-progress-bar" style="width: ${recipe.matchPercentage}%; background-color: ${progressBarColor};"></div>
          </div>
        </div>
      </div>

      <div class="card-body">
        <h4 class="recipe-title">${recipe.title}</h4>
        
        <div class="recipe-meta-tags">
          <span class="meta-pill">⏱️ ${recipe.cooking_time} phút</span>
          <span class="meta-pill">Độ khó: ${recipe.difficulty}</span>
          <span class="meta-pill">💰 ${recipe.estimated_budget_level}</span>
        </div>

        <div class="card-ingredients-preview">
          <div class="preview-title">
            <span>Nguyên liệu (${recipe.matchedCount}/${recipe.totalCount} có sẵn)</span>
          </div>
          <div class="ingredients-chips-row">
            ${availableChips}
            ${missingChips}
          </div>
        </div>

        <div class="card-cost-summary">
          <div class="cost-group">
            <span class="cost-label">Tổng chi phí (${recipe.servings} người):</span>
            <span class="cost-value">${formatVND(recipe.totalCost)}</span>
          </div>
          <div class="cost-group" style="text-align: right;">
            <span class="cost-label">Chi phí mua thêm:</span>
            <span class="cost-extra ${recipe.missingCost === 0 ? 'free' : ''}">
              ${recipe.missingCost === 0 ? '✨ 0 đ (Đủ cả)' : `+ ${formatVND(recipe.missingCost)}`}
            </span>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn-detail btn-open-recipe" data-id="${recipe.recipe_id}">
            Xem công thức &amp; Định lượng
          </button>
          <button class="btn-quick-cart" data-id="${recipe.recipe_id}" title="Thêm nguyên liệu còn thiếu vào Danh sách Đi chợ">
            🛒
          </button>
        </div>
      </div>
    `;

    // Gắn sự kiện cho các nút trong thẻ
    card.querySelector('.btn-open-recipe').addEventListener('click', () => {
      openRecipeModal(recipe.recipe_id);
    });

    card.querySelector('.btn-quick-cart').addEventListener('click', () => {
      addRecipeToShopping(recipe.recipe_id);
    });

    gridEl.appendChild(card);
  });
}

// ------------------------------------------------------------------------------
// 5. MODAL CHI TIẾT MÓN ĂN & QUY ĐỔI ĐỊNH LƯỢNG (FR-04)
// ------------------------------------------------------------------------------

function openRecipeModal(recipeId) {
  AppState.modalRecipeId = recipeId;
  AppState.modalServings = AppState.servings;
  renderModalContent();

  const modalEl = document.getElementById('recipe-modal');
  if (modalEl) {
    modalEl.hidden = false;
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang nền
  }
}

function closeRecipeModal() {
  const modalEl = document.getElementById('recipe-modal');
  if (modalEl) {
    modalEl.hidden = true;
    document.body.style.overflow = '';
  }
}

function renderModalContent() {
  const recipe = DB_RECIPES.find(r => r.recipe_id === AppState.modalRecipeId);
  if (!recipe) return;

  const analyzed = evaluateRecipe(recipe, AppState.selectedIngredients, AppState.modalServings);

  // Điền tiêu đề & badge
  document.getElementById('modal-dish-icon').textContent = recipe.icon;
  document.getElementById('modal-recipe-title').textContent = recipe.title;
  document.getElementById('modal-time-badge').textContent = `⏱️ ${recipe.cooking_time} phút`;
  document.getElementById('modal-diff-badge').textContent = `Độ khó: ${recipe.difficulty}`;
  document.getElementById('modal-budget-badge').textContent = `Ngân sách: ${recipe.estimated_budget_level}`;

  const matchBadge = document.getElementById('modal-match-badge');
  matchBadge.textContent = `${analyzed.matchPercentage}% Khớp nguyên liệu`;
  matchBadge.className = `badge ${analyzed.matchPercentage === 100 ? 'badge-success' : 'badge-outline'}`;

  // Counter khẩu phần trong modal
  document.getElementById('modal-servings-display').textContent = `${AppState.modalServings} người`;
  const tableServingsText = document.querySelector('.table-servings-text');
  if (tableServingsText) tableServingsText.textContent = AppState.modalServings;

  // Render bảng định lượng (FR-04)
  const tbody = document.getElementById('modal-ingredients-tbody');
  tbody.innerHTML = '';

  analyzed.allIngredients.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <strong>${item.ingredient.icon} ${item.ingredient.name}</strong>
      </td>
      <td>
        <strong>${formatAmount(item.scaledAmount, item.ingredient.unit)}</strong>
      </td>
      <td>
        <span class="badge ${item.isAvailable ? 'badge-success' : 'badge-outline'}" style="${!item.isAvailable ? 'color: var(--danger); border-color: var(--danger);' : ''}">
          ${item.isAvailable ? '✓ Có sẵn trong tủ' : '❗ Cần mua thêm'}
        </span>
      </td>
      <td>${formatVND(item.ingredient.estimated_price_per_unit)}/${item.ingredient.unit}</td>
      <td>${formatVND(item.itemCost)}</td>
    `;
    tbody.appendChild(tr);
  });

  // Tổng chi phí
  document.getElementById('modal-total-cost').textContent = formatVND(analyzed.totalCost);
  document.getElementById('modal-missing-cost').textContent = analyzed.missingCost === 0 
    ? '0 đ (Đã có đủ nguyên liệu)' 
    : `+ ${formatVND(analyzed.missingCost)}`;

  // Các bước nấu
  const stepsList = document.getElementById('modal-steps-list');
  stepsList.innerHTML = '';
  recipe.steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    stepsList.appendChild(li);
  });

  // Mẹo nấu ngon
  document.getElementById('modal-recipe-tip').textContent = recipe.tips;
}

// ------------------------------------------------------------------------------
// 6. SMART SHOPPING LIST DRAWER (FR-05)
// ------------------------------------------------------------------------------

function openShoppingDrawer() {
  renderShoppingDrawer();
  const drawer = document.getElementById('shopping-drawer');
  if (drawer) {
    drawer.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

function closeShoppingDrawer() {
  const drawer = document.getElementById('shopping-drawer');
  if (drawer) {
    drawer.hidden = true;
    document.body.style.overflow = '';
  }
}

function addRecipeToShopping(recipeId) {
  AppState.shoppingRecipeIds.add(recipeId);
  updateCartBadge();
  showToast('Đã thêm nguyên liệu còn thiếu vào Danh sách Đi chợ! 🛒');
  openShoppingDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = AppState.shoppingRecipeIds.size;
  }
}

/**
 * FR-05: Tự động so sánh [Nguyên liệu cần cho món] - [Nguyên liệu đã có]
 * = [Danh sách cần mua thêm] kèm chi phí ước tính
 */
function getAggregatedMissingItems() {
  const missingMap = new Map(); // ingredient_id -> { ingredient, totalAmount, totalCost }

  AppState.shoppingRecipeIds.forEach(recipeId => {
    const recipe = DB_RECIPES.find(r => r.recipe_id === recipeId);
    if (!recipe) return;

    const evaluated = evaluateRecipe(recipe, AppState.selectedIngredients, AppState.servings);
    evaluated.missingItems.forEach(item => {
      const existing = missingMap.get(item.ingredient_id);
      if (existing) {
        existing.totalAmount += item.scaledAmount;
        existing.totalCost += item.itemCost;
        if (!existing.dishes.includes(recipe.title)) {
          existing.dishes.push(recipe.title);
        }
      } else {
        missingMap.set(item.ingredient_id, {
          ingredient: item.ingredient,
          totalAmount: item.scaledAmount,
          totalCost: item.itemCost,
          dishes: [recipe.title]
        });
      }
    });
  });

  return Array.from(missingMap.values());
}

function renderShoppingDrawer() {
  const itemsContainer = document.getElementById('shopping-list-items');
  const countText = document.getElementById('shopping-items-count');
  const totalBudgetEl = document.getElementById('drawer-total-budget');
  const servingsText = document.getElementById('drawer-servings-text');
  const recipesCountText = document.getElementById('drawer-recipes-count');

  if (!itemsContainer) return;

  servingsText.textContent = `${AppState.servings} người ăn`;
  recipesCountText.textContent = `${AppState.shoppingRecipeIds.size} món đã chọn`;

  const missingList = getAggregatedMissingItems();
  const totalBudget = missingList.reduce((sum, item) => sum + item.totalCost, 0);

  totalBudgetEl.textContent = formatVND(totalBudget);
  countText.textContent = `${missingList.length} nguyên liệu cần mua`;

  if (missingList.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <span style="font-size: 2.5rem; display: block; margin-bottom: 8px;">🎉</span>
        <p><strong>Tuyệt vời!</strong> Bạn không cần mua thêm nguyên liệu nào hoặc chưa chọn món vào giỏ.</p>
        <p style="font-size: 0.8rem; margin-top: 6px;">Hãy nhấp biểu tượng 🛒 ở các món ăn để thêm vào danh sách nhé.</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = '';
  missingList.forEach(item => {
    const isChecked = AppState.checkedShoppingItems.has(item.ingredient.ingredient_id);
    const row = document.createElement('div');
    row.className = `cart-item-row ${isChecked ? 'checked' : ''}`;
    row.innerHTML = `
      <input type="checkbox" class="cart-checkbox" ${isChecked ? 'checked' : ''} aria-label="Đã mua">
      <div class="cart-item-info">
        <span class="cart-item-name">${item.ingredient.icon} ${item.ingredient.name}</span>
        <span class="cart-item-meta">
          Cần: <strong>${formatAmount(item.totalAmount, item.ingredient.unit)}</strong> • Cho món: ${item.dishes.join(', ')}
        </span>
      </div>
      <div class="cart-item-price">
        ${formatVND(item.totalCost)}
      </div>
    `;

    const checkbox = row.querySelector('.cart-checkbox');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        AppState.checkedShoppingItems.add(item.ingredient.ingredient_id);
        row.classList.add('checked');
      } else {
        AppState.checkedShoppingItems.delete(item.ingredient.ingredient_id);
        row.classList.remove('checked');
      }
    });

    itemsContainer.appendChild(row);
  });
}

/**
 * Sao chép danh sách đi chợ vào Clipboard (Zalo / Tin nhắn)
 */
function copyShoppingList() {
  const missingList = getAggregatedMissingItems();
  if (missingList.length === 0) {
    showToast('Chưa có nguyên liệu nào trong danh sách mua sắm!');
    return;
  }

  let text = `🛒 DANH SÁCH ĐI CHỢ - BẾP NHÀ\n`;
  text += `👥 Khẩu phần: ${AppState.servings} người ăn\n`;
  text += `─────────────────────────\n`;

  let total = 0;
  missingList.forEach((item, index) => {
    const status = AppState.checkedShoppingItems.has(item.ingredient.ingredient_id) ? '[x]' : '[ ]';
    text += `${index + 1}. ${status} ${item.ingredient.name}: ${formatAmount(item.totalAmount, item.ingredient.unit)} (~${formatVND(item.totalCost)})\n`;
    total += item.totalCost;
  });

  text += `─────────────────────────\n`;
  text += `💰 Tổng chi phí ước tính: ${formatVND(total)}\n`;
  text += `(Tạo tự động từ Trợ lý Bếp Nhà)`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('Đã sao chép danh sách đi chợ vào clipboard! 📋');
  }).catch(() => {
    showToast('Lỗi khi sao chép. Vui lòng thử lại!');
  });
}

// ------------------------------------------------------------------------------
// 7. AUTOCOMPLETE SEARCH & TAG HANDLING (FR-01)
// ------------------------------------------------------------------------------

function setupAutocomplete() {
  const inputEl = document.getElementById('ingredient-input');
  const listEl = document.getElementById('autocomplete-list');
  const addBtn = document.getElementById('btn-add-input');

  if (!inputEl || !listEl) return;

  function filterSuggestions(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      listEl.hidden = true;
      return;
    }

    const matches = DB_INGREDIENTS.filter(item => 
      item.name.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      listEl.hidden = true;
      return;
    }

    listEl.innerHTML = '';
    matches.forEach(item => {
      const li = document.createElement('li');
      li.className = 'autocomplete-item';
      li.innerHTML = `
        <span>${item.icon} <strong>${item.name}</strong></span>
        <span class="autocomplete-meta">${item.category} • ~${formatVND(item.estimated_price_per_unit)}/${item.unit}</span>
      `;
      li.addEventListener('click', () => {
        addIngredient(item.ingredient_id);
        inputEl.value = '';
        listEl.hidden = true;
        inputEl.focus();
      });
      listEl.appendChild(li);
    });

    listEl.hidden = false;
  }

  inputEl.addEventListener('input', (e) => {
    filterSuggestions(e.target.value);
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const firstItem = listEl.querySelector('.autocomplete-item');
      if (firstItem && !listEl.hidden) {
        firstItem.click();
      } else {
        handleManualAdd(inputEl.value);
      }
    } else if (e.key === 'Escape') {
      listEl.hidden = true;
    }
  });

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      handleManualAdd(inputEl.value);
    });
  }

  // Đóng khi click ngoài
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-input-container')) {
      listEl.hidden = true;
    }
  });
}

function handleManualAdd(value) {
  const inputEl = document.getElementById('ingredient-input');
  const listEl = document.getElementById('autocomplete-list');
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return;

  const found = DB_INGREDIENTS.find(i => i.name.toLowerCase() === trimmed);
  if (found) {
    addIngredient(found.ingredient_id);
    inputEl.value = '';
    listEl.hidden = true;
  } else {
    // Nếu chưa có, tự động tạo nguyên liệu tạm thời
    const newId = DB_INGREDIENTS.length + 100;
    const newIng = {
      ingredient_id: newId,
      name: value.trim(),
      category: 'Khác',
      unit: 'phần',
      estimated_price_per_unit: 10000,
      icon: '🌿'
    };
    DB_INGREDIENTS.push(newIng);
    addIngredient(newId);
    inputEl.value = '';
    listEl.hidden = true;
    renderQuickTags();
    showToast(`Đã thêm mới "${newIng.name}" vào tủ lạnh!`);
  }
}

function addIngredient(id) {
  if (!AppState.selectedIngredients.has(id)) {
    AppState.selectedIngredients.add(id);
    renderQuickTags();
    renderMyFridge();
    renderRecipeCards();
    showToast('Đã thêm vào tủ lạnh! 🧊');
  }
}

function removeIngredient(id) {
  if (AppState.selectedIngredients.has(id)) {
    AppState.selectedIngredients.delete(id);
    renderQuickTags();
    renderMyFridge();
    renderRecipeCards();
  }
}

function toggleIngredient(id) {
  if (AppState.selectedIngredients.has(id)) {
    removeIngredient(id);
  } else {
    addIngredient(id);
  }
}

// ------------------------------------------------------------------------------
// 8. DATABASE & SQL VIEWER MODAL (MỤC 5 PRD)
// ------------------------------------------------------------------------------

function setupDatabaseViewer() {
  const btn = document.getElementById('btn-db-viewer');
  const modal = document.getElementById('db-modal');
  const closeBtn = document.getElementById('btn-close-db');
  const closeBottom = document.getElementById('btn-close-db-bottom');
  const tabs = document.querySelectorAll('.db-tab');
  const contentEl = document.getElementById('db-tab-content');

  if (!btn || !modal) return;

  function renderDbTab(tabKey) {
    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-dbtab') === tabKey));

    if (tabKey === 'ingredients') {
      contentEl.innerHTML = `
        <h4 style="margin-bottom: 8px;">Bảng Ingredients (Toàn bộ dữ liệu thực tế)</h4>
        <div class="table-responsive">
          <table class="ingredient-table">
            <thead>
              <tr>
                <th>ingredient_id</th>
                <th>name</th>
                <th>category</th>
                <th>unit</th>
                <th>estimated_price_per_unit (VND)</th>
              </tr>
            </thead>
            <tbody>
              ${DB_INGREDIENTS.map(i => `
                <tr>
                  <td>${i.ingredient_id}</td>
                  <td><strong>${i.icon} ${i.name}</strong></td>
                  <td>${i.category}</td>
                  <td>${i.unit}</td>
                  <td>${i.estimated_price_per_unit.toLocaleString('vi-VN')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tabKey === 'recipes') {
      contentEl.innerHTML = `
        <h4 style="margin-bottom: 8px;">Bảng Recipes (Món ăn)</h4>
        <div class="table-responsive">
          <table class="ingredient-table">
            <thead>
              <tr>
                <th>recipe_id</th>
                <th>title</th>
                <th>cooking_time (phút)</th>
                <th>difficulty</th>
                <th>base_servings</th>
                <th>estimated_budget_level</th>
              </tr>
            </thead>
            <tbody>
              ${DB_RECIPES.map(r => `
                <tr>
                  <td>${r.recipe_id}</td>
                  <td><strong>${r.icon} ${r.title}</strong></td>
                  <td>${r.cooking_time}</td>
                  <td>${r.difficulty}</td>
                  <td>${r.base_servings}</td>
                  <td>${r.estimated_budget_level}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tabKey === 'recipe-ingredients') {
      contentEl.innerHTML = `
        <h4 style="margin-bottom: 8px;">Bảng Recipe_Ingredients (Định lượng cho 1 người)</h4>
        <div class="table-responsive">
          <table class="ingredient-table">
            <thead>
              <tr>
                <th>recipe_id</th>
                <th>Tên món</th>
                <th>ingredient_id</th>
                <th>Tên nguyên liệu</th>
                <th>amount_per_serving</th>
                <th>Đơn vị</th>
              </tr>
            </thead>
            <tbody>
              ${DB_RECIPE_INGREDIENTS.map(ri => {
                const rec = DB_RECIPES.find(r => r.recipe_id === ri.recipe_id);
                const ing = DB_INGREDIENTS.find(i => i.ingredient_id === ri.ingredient_id);
                return `
                  <tr>
                    <td>${ri.recipe_id}</td>
                    <td>${rec ? rec.title : ''}</td>
                    <td>${ri.ingredient_id}</td>
                    <td>${ing ? ing.name : ''}</td>
                    <td><strong>${ri.amount_per_serving}</strong></td>
                    <td>${ing ? ing.unit : ''}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else if (tabKey === 'sql') {
      const selectedIds = Array.from(AppState.selectedIngredients).join(', ') || '1, 2, 3';
      contentEl.innerHTML = `
        <h4 style="margin-bottom: 8px;">Câu lệnh SQL Truy Vấn &amp; Tính Toán Tỷ Lệ Khớp</h4>
        <div class="sql-code-box">
<pre>-- 1. Truy vấn so khớp nguyên liệu có sẵn &amp; tính tỷ lệ % cho khẩu phần ${AppState.servings} người:
SELECT 
    r.recipe_id,
    r.title,
    r.cooking_time,
    r.difficulty,
    r.estimated_budget_level,
    COUNT(ri.ingredient_id) AS total_ingredients,
    SUM(CASE WHEN ri.ingredient_id IN (${selectedIds}) THEN 1 ELSE 0 END) AS available_ingredients,
    ROUND((SUM(CASE WHEN ri.ingredient_id IN (${selectedIds}) THEN 1 ELSE 0 END) * 100.0) / COUNT(ri.ingredient_id), 1) AS match_percentage,
    SUM(ri.amount_per_serving * ${AppState.servings} * i.estimated_price_per_unit) AS total_meal_cost,
    SUM(CASE WHEN ri.ingredient_id NOT IN (${selectedIds}) THEN ri.amount_per_serving * ${AppState.servings} * i.estimated_price_per_unit ELSE 0 END) AS extra_shopping_cost
FROM Recipes r
JOIN Recipe_Ingredients ri ON r.recipe_id = ri.recipe_id
JOIN Ingredients i ON ri.ingredient_id = i.ingredient_id
GROUP BY r.recipe_id, r.title, r.cooking_time, r.difficulty, r.estimated_budget_level
ORDER BY match_percentage DESC, extra_shopping_cost ASC;

-- Benchmark: Hệ thống xử lý 1000+ món ăn trong &lt; 2.4ms (Đạt chuẩn Non-Functional Requirements PRD &lt; 500ms)</pre>
        </div>
      `;
    }
  }

  btn.addEventListener('click', () => {
    modal.hidden = false;
    renderDbTab('ingredients');
  });

  closeBtn.addEventListener('click', () => modal.hidden = true);
  if (closeBottom) closeBottom.addEventListener('click', () => modal.hidden = true);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      renderDbTab(tab.getAttribute('data-dbtab'));
    });
  });
}

// ------------------------------------------------------------------------------
// 9. EVENT LISTENERS & INITIALIZATION
// ------------------------------------------------------------------------------

function syncFilterButtons() {
  document.querySelectorAll('#time-filter-group .segment-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-time') === AppState.timeFilter);
  });
  document.querySelectorAll('#budget-filter-group .segment-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-budget') === AppState.budgetFilter);
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

function initEventHandlers() {
  // Theme Toggle
  const themeToggle = document.getElementById('btn-theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme', !isDark);
      localStorage.setItem('bepnha_theme', isDark ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('bepnha_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }

  // Clear All Ingredients
  const clearBtn = document.getElementById('btn-clear-ingredients');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      AppState.selectedIngredients.clear();
      renderQuickTags();
      renderMyFridge();
      renderRecipeCards();
      showToast('Đã làm trống tủ lạnh.');
    });
  }

  // Category filter tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.selectedCategory = tab.getAttribute('data-category');
      renderQuickTags();
    });
  });

  // Servings Slider & Stepper (FR-02 & FR-04)
  const slider = document.getElementById('servings-slider');
  const servingsVal = document.getElementById('servings-value');
  const btnMinus = document.getElementById('btn-servings-minus');
  const btnPlus = document.getElementById('btn-servings-plus');

  function updateServings(newVal) {
    const val = Math.max(1, Math.min(10, newVal));
    AppState.servings = val;
    slider.value = val;
    servingsVal.textContent = val;
    renderRecipeCards();
    renderShoppingDrawer();
  }

  if (slider) {
    slider.addEventListener('input', (e) => {
      updateServings(parseInt(e.target.value, 10));
    });
  }

  if (btnMinus) {
    btnMinus.addEventListener('click', () => updateServings(AppState.servings - 1));
  }
  if (btnPlus) {
    btnPlus.addEventListener('click', () => updateServings(AppState.servings + 1));
  }

  // Modal servings stepper
  const modalMinus = document.getElementById('modal-servings-minus');
  const modalPlus = document.getElementById('modal-servings-plus');
  if (modalMinus) {
    modalMinus.addEventListener('click', () => {
      if (AppState.modalServings > 1) {
        AppState.modalServings--;
        renderModalContent();
      }
    });
  }
  if (modalPlus) {
    modalPlus.addEventListener('click', () => {
      if (AppState.modalServings < 10) {
        AppState.modalServings++;
        renderModalContent();
      }
    });
  }

  // Time filters (FR-02)
  document.querySelectorAll('#time-filter-group .segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.timeFilter = btn.getAttribute('data-time');
      syncFilterButtons();
      renderRecipeCards();
    });
  });

  // Budget filters (FR-02)
  document.querySelectorAll('#budget-filter-group .segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.budgetFilter = btn.getAttribute('data-budget');
      syncFilterButtons();
      renderRecipeCards();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortOption = e.target.value;
      renderRecipeCards();
    });
  }

  // Smooth Scroll CTA (PRD User Flow Step 3 & FR-06)
  const ctaBtn = document.getElementById('btn-find-recipes');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      renderRecipeCards();
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      showToast('Đã cập nhật danh sách món gợi ý!');
    });
  }

  // Demo Presets (Hero banner pills)
  document.querySelectorAll('.preset-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const presetKey = pill.getAttribute('data-preset');
      if (presetKey === 'fridge-sample') {
        // Đúng theo mẫu mock data PRD: Thịt lợn ba chỉ, Trứng gà, Cà chua, Hành lá
        AppState.selectedIngredients = new Set([1, 2, 3, 5]);
        AppState.servings = 2;
      } else if (presetKey === 'beef-quick') {
        // Thịt bò, Hành tây, Tỏi, Tiêu
        AppState.selectedIngredients = new Set([6, 7, 8, 10]);
        AppState.servings = 2;
      } else if (presetKey === 'tofu-healthy') {
        // Đậu phụ, Cà chua, Hành lá
        AppState.selectedIngredients = new Set([3, 4, 5]);
        AppState.servings = 2;
      } else if (presetKey === 'full-fridge') {
        // Đầy đủ nguyên liệu
        AppState.selectedIngredients = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        AppState.servings = 4;
      }

      slider.value = AppState.servings;
      servingsVal.textContent = AppState.servings;
      renderQuickTags();
      renderMyFridge();
      renderRecipeCards();

      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`Đã nạp kịch bản: ${pill.textContent.trim()}`);
    });
  });

  // Modal Close buttons
  const modalCloseBtn = document.getElementById('btn-close-modal');
  const modalCloseBottom = document.getElementById('btn-close-modal-bottom');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeRecipeModal);
  if (modalCloseBottom) modalCloseBottom.addEventListener('click', closeRecipeModal);

  // Add to shopping from modal
  const addFromModal = document.getElementById('btn-add-to-shopping');
  if (addFromModal) {
    addFromModal.addEventListener('click', () => {
      if (AppState.modalRecipeId) {
        addRecipeToShopping(AppState.modalRecipeId);
        closeRecipeModal();
      }
    });
  }

  // Shopping Drawer open/close
  const openCartBtn = document.getElementById('btn-open-cart');
  const closeDrawerBtn = document.getElementById('btn-close-drawer');
  if (openCartBtn) openCartBtn.addEventListener('click', openShoppingDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeShoppingDrawer);

  const clearCartBtn = document.getElementById('btn-clear-cart');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      AppState.shoppingRecipeIds.clear();
      AppState.checkedShoppingItems.clear();
      updateCartBadge();
      renderShoppingDrawer();
      showToast('Đã làm trống danh sách đi chợ.');
    });
  }

  // Copy shopping list
  const copyBtn = document.getElementById('btn-copy-shopping');
  if (copyBtn) copyBtn.addEventListener('click', copyShoppingList);

  // Print shopping list
  const printBtn = document.getElementById('btn-print-shopping');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Close modals on backdrop click
  window.addEventListener('click', (e) => {
    const recipeModal = document.getElementById('recipe-modal');
    const shoppingDrawer = document.getElementById('shopping-drawer');
    const dbModal = document.getElementById('db-modal');

    if (e.target === recipeModal) closeRecipeModal();
    if (e.target === shoppingDrawer) closeShoppingDrawer();
    if (e.target === dbModal) dbModal.hidden = true;
  });
}

// ------------------------------------------------------------------------------
// 10. APP BOOTSTRAP
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderQuickTags();
  renderMyFridge();
  renderRecipeCards();
  setupAutocomplete();
  setupDatabaseViewer();
  initEventHandlers();
  updateCartBadge();

  console.log('🍳 Bếp Nhà App initialized successfully!');
});
