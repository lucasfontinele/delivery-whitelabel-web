export const companyMock = {
  id: 'c79a1f90-da57-4358-8c84-1910dea11310',
  profile: {
    name: 'Las Empanadas',
    document_number: '101.753.967-79',
    phone_number: '+55 21 98118-7644',
    about:
      'As receitas são exclusivas e em sua maioria elaboradas pela sócia Carla, que também tem formação em nutrição. Todos os produtos da marca são artesanais e isentos de corantes, conservantes e gorduras trans.',
    cover: {
      color: '#000000', // Cor predominante da imagem. Usar como background até a imagem ser carregada
      image:
        'https://img.ecommerce.macetado.com/merchants/c79a1f90-da57-4358-8c84-1910dea11310/cover.jpg',
    },
    logo: {
      color: '#000000', // Cor predominante da imagem. Usar como background até a imagem ser carregada
      image:
        'https://img.ecommerce.macetado.com/merchants/c79a1f90-da57-4358-8c84-1910dea11310/logo.jpg',
    },
    address: {
      line1: 'Estrada Intendente Magalhães, 187 - Casa 13',
      line2: 'Madureira - Rio de Janeiro, RJ',
      reference: 'Vila Amizade',
      zip_code: '21331-040',
      location: {
        latitude: '-22.9865387',
        longitude: '-43.2104753',
      },
    },
  },
  order_settings: {
    currency: 'BRL', // ISO 4217
    pay_in_app: {
      // Pagamento direto no app
      active: true,
      maximum_order_value: 199.99, // Valor máximo do pedido. Não deixa adicionar ao carrinho.
      payment_methods: {
        credit: [
          'mastercard',
          'visa',
          'amex',
          'elo',
          'diners',
          'cabal',
          'banescard',
          'hipercard',
          'discover',
          'aura',
          'jcb',
        ],
        debit: ['mastercard', 'visa-electron', 'elo'],
        meal_voucher: ['alelo', 'ben', 'sodexo', 'ticket', 'vr'],
        food_voucher: ['sodexo', 'vr'],
        transfer: ['pix', 'wallet'],
      },
    },
    pay_on_delivery: {
      // Pagamento feito presencial (fora do app)
      active: true,
      maximum_order_value: 399.99, // Valor máximo do pedido. Não deixa adicionar ao carrinho.
      payment_methods: {
        credit: [
          'mastercard',
          'visa',
          'amex',
          'elo',
          'diners',
          'cabal',
          'banescard',
          'hipercard',
        ],
        debit: ['mastercard', 'visa-electron', 'elo'],
        meal_voucher: ['alelo', 'ben', 'sodexo', 'ticket', 'vr'],
        food_voucher: ['sodexo', 'vr'],
        transfer: ['pix', 'wallet'],
      },
    },
    takeaway: {
      // Usuário busca o pedido (retirada)
      estimated_time: 30, // Tempo estimado em minutos
    },
    delivery: {
      // Enviamos o pedido ao usuário
      estimated_time: 60, // Tempo estimado em minutos
      cover_area: [
        // De forma ordenada, encontrar o primeiro match de localização da região do usuário para carregar as configuração de entrega
        {
          delivery_fee: 3.99, // Valor do frete
          free_delivery_from: 500.0, // Entrega gratis acima de X valor
          minimum_order_value: 119.99, // Valor mínimo para entrega
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [0.0, 0.0],
                [0.0, 5.0],
                [5.0, 5.0],
                [5.0, 0.0],
              ],
            ],
          },
        },
        {
          delivery_fee: 1.99, // Valor do frete
          free_delivery_from: 50.0, // Entrega gratis acima de X valor
          minimum_order_value: 10.99, // Valor mínimo para entrega
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [0.0, 0.0],
                [0.0, 5.0],
                [5.0, 5.0],
                [5.0, 0.0],
              ],
            ],
          },
        },
      ],
    },
  },
  opening_schedule: {
    status: 'auto', // auto | closing | opening
    opening_hours: [
      {
        weekdays: [2, 3, 4, 5, 6],
        delivery: {
          opening: '18:00',
          closing: '22:00',
        },
        takeaway: {
          opening: '18:00',
          closing: '00:00',
        },
        kitchen: {
          opening: '18:00',
          closing: '23:00',
        },
      },
      {
        weekdays: [1, 7],
        delivery: {
          opening: '18:00',
          closing: '21:00',
        },
        takeaway: {
          opening: '18:00',
          closing: '21:00',
        },
        kitchen: {
          opening: '18:00',
          closing: '21:00',
        },
      },
      {
        weekdays: [7],
        delivery: {
          opening: '11:00',
          closing: '13:00',
        },
        takeaway: {
          opening: '11:00',
          closing: '13:00',
        },
        kitchen: {
          opening: '11:00',
          closing: '13:00',
        },
      },
    ],
    opening_days: [
      {
        day: '2021-02-25',
        delivery: {
          opening: '11:00',
          closing: '13:00',
        },
        takeaway: {
          opening: '11:00',
          closing: '13:00',
        },
        kitchen: {
          opening: '11:00',
          closing: '13:00',
        },
      },
      {
        day: '2021-02-25',
        delivery: {
          opening: '18:00',
          closing: '21:00',
        },
        takeaway: {
          opening: '18:00',
          closing: '21:00',
        },
        kitchen: {
          opening: '18:00',
          closing: '21:00',
        },
      },
    ],
    closed_days: ['2021-02-15', '2021-02-16', '2021-02-17', '2021-03-01'],
  },
};
