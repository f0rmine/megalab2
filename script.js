// Виконується після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  applyFilter('all');   // Застосовує фільтр для всіх елементів
  // Показує пропозицію підписки через 5 секунд
  setTimeout(() => {
      showSubscriptionOffer();
  }, 5000);
});

// Масив даних з продуктами
const data = [
  { id: 1, category: 'category1', title: 'Яблуко', description: 'Смачне червоне яблуко', image: 'apple.jpg', price: 25.99 },
  { id: 2, category: 'category1', title: 'Банан', description: 'Жовтий банан', image: 'banana.jpg', price: 15.5 },
  { id: 3, category: 'category2', title: 'Морква', description: 'Свіжа морква', image: 'carrot.jpg', price: 8.0 },
  { id: 4, category: 'category2', title: 'Капуста', description: 'Зелена капуста', image: 'cabbage.jpg', price: 12.75 },
  { id: 5, category: 'category2', title: 'Броколі', description: 'Корисне броколі', image: 'broccoli.jpg', price: 9.99 },
  { id: 6, category: 'category2', title: 'Помідор', description: 'Червоний помідор', image: 'tomato.jpg', price: 18.25 },
  { id: 7, category: 'category1', title: 'Апельсин', description: 'Соковитий апельсин', image: 'orange.jpg', price: 20.0 },
  { id: 8, category: 'category1', title: 'Груша', description: 'Зелена груша', image: 'pear.jpg', price: 16.5 },
  { id: 9, category: 'category1', title: 'Виноград', description: 'Червоний виноград', image: 'grape.jpg', price: 22.99 },
  { id: 10, category: 'category2', title: 'Огірок', description: 'Свіжий огірок', image: 'cucumber.jpg', price: 6.5 },
];

// Функція для застосування фільтру за категорією
function applyFilter(category) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';   // Очищає контейнер перед додаванням нових елементів
  const filteredData = category === 'all' ? data : data.filter(item => item.category === category);
  
  filteredData.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <img src="${item.image}" alt="Image ${item.id}">
          <h4>${item.title}</h4>
          <p>Ціна: ${item.price} грн</p>
          <div class="description">${item.description}</div>
          `;
      // Додає обробник події для переключення видимості опису при кліку на картку
      card.addEventListener('click', () => {
          const description = card.querySelector('.description');
          description.style.display = description.style.display === 'block' ? 'none' : 'block';
      });
      container.appendChild(card);
  });
}

// Функція для показу пропозиції підписки
function showSubscriptionOffer() {
  const subscriptionOffer = document.getElementById('subscriptionOffer');
  // Показує пропозицію, якщо користувач ще не підписаний
  if (!localStorage.getItem('subscribed')) {
      subscriptionOffer.style.display = 'flex';
  }
}

// Функція для підписки
function subscribe() {
  localStorage.setItem('subscribed', 'true');  // Зберігає інформацію про підписку в локальному сховищі
  closeSubscriptionOffer();  // Закриває вікно пропозиції
  alert('Дякуємо за підписку!');  // Показує повідомлення про успішну підписку
}

// Функція для відхилення пропозиції підписки
function rejectOffer() {
  closeSubscriptionOffer();  // Закриває вікно пропозиції
}

// Функція для закриття вікна пропозиції підписки
function closeSubscriptionOffer() {
  const subscriptionOffer = document.getElementById('subscriptionOffer');
  subscriptionOffer.style.display = 'none';  // Ховає вікно пропозиції
}
