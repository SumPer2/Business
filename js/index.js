document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки Contact Sales
    const contactSalesButtons = document.querySelectorAll('.intro_top_link, .intro_link, .footer_link, .let_link');
    
    // Модальное окно
    const modal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.close_btn');
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const submitBtn = document.getElementById('submitBtn');
    const formInputs = document.querySelectorAll('#salesForm input[required]');
    const thankYouLink = document.querySelector('.thank_you_link');
    
    // Открытие модального окна
    contactSalesButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Проверка заполнения обязательных полей
    formInputs.forEach(input => {
        input.addEventListener('input', checkForm);
    });
    
    function checkForm() {
        let allFilled = true;
        formInputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        
        submitBtn.disabled = !allFilled;
        if (allFilled) {
            submitBtn.classList.add('active');
        } else {
            submitBtn.classList.remove('active');
        }
    }
    
    // Обработка отправки формы
    document.getElementById('salesForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Показываем сообщение об успехе
        contactForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
    
    // Закрытие модального окна при нажатии на ссылку "Super!"
    thankYouLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        contactForm.style.display = 'block';
        thankYouMessage.style.display = 'none';
        
        // Очищаем форму
        document.getElementById('salesForm').reset();
        submitBtn.disabled = true;
        submitBtn.classList.remove('active');
    });
});