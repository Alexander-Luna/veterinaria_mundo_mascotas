import { TYPES } from "./ShoppingAction";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: 'Receta original de pollo',
      descripcion: 'Alimento completo y balanceado para nutrir a tu cachorro hasta el primer año de edad.',
      image: require('../img/procan.png'),
      price: 59
    },
    {
      id: 2,
      name: 'Pollo, cereales y leche',
      descripcion: 'Alimento ideal para las primeras etapas de tu cachorro de raza pequeña con las vitaminas y los minerales que necesita.',
      image: require('../img/procan2.png'),
      price: 55
    },
    {
      id: 3,
      name: 'Equilibrio Natural',
      image: require('../img/procan3.png'),
      descripcion: 'Alimento con fibra benéfica y prebióticos que aseguran la adecuada absorción de nutrientes desde sus primeras etapas.',
      price: 50
    },
    {
      id: 4,
      name: 'Pollo, carne y vegetales',
      image: require('../img/procan4.png'),
      descripcion: 'Alimento completo y balanceado, sabor especial de pollo, carne y vegetales, óptimo para el mantenimiento de tu mascota, en sus años de mayor vitalidad.',
      price: 50
    },
    {
      id: 5,
      name: 'Carne, arroz y vegetales',
      image: require('../img/procan5.png'),
      descripcion: 'Alimento completo y balanceado, sabor especial de carne, arroz y vegetales, óptimo para el mantenimiento de tu mascota, en sus años de mayor vitalidad.',
      price: 50
    },
    {
      id: 6,
      name: 'Receta original de pollo',
      image: require('../img/procan6.png'),
      descripcion: 'Alimento delicioso y balanceado para el mantenimiento de tu mascota en sus años de mayor vitalidad.',
      price: 60
    },
    {
      id: 7,
      name: 'Pollo, carne y cereales',
      image: require('../img/procan9.png'),
      descripcion: 'Alimento balanceado que le aporta a tu perro mayor de 7 años, una nutrición adecuada que le ayuda al mantenimiento de sus músculos y articulaciones.',
      price: 700
    },
    {
      id: 8,
      name: 'Trocitos de pollo',
      image: require('../img/alimento_humedo.png'),
      descripcion: 'Alimento completo, alto en proteína, hecho con trozos de carne sabor pollo para cachorros. Latas de 180 gr y 415 gr',
      price: 800
    },
    {
      id: 9,
      name: 'Trocitos de cerdo',
      image: require('../img/alimento_humedo1.png'),
      descripcion: 'Alimento completo, alto en proteína, hecho con trozos de carne sabor cerdo para cachorros. Latas de 180gr y 415gr de todas las razas.',
      price: 800
    },
    {
      id: 10,
      name: 'Trocitos de pollo',
      image: require('../img/alimento_humedo2.png'),
      descripcion: 'Alimento completo, alto en proteína, hecho con trozos de carne sabor a pollo, ideal para todo tipo de raza.',
      price: 800
    },
    {
      id: 11,
      name: 'Trocitos de pollo',
      image: require('../img/alimento_humedo3.png'),
      descripcion: 'Alimento completo, alto en proteína, hecho con trozos de carne sabor a cerdo, ideal para todo tipo de raza.',
      price: 800
    },
    {
      id: 12,
      name: 'Razas pequeñas',
      image: require('../img/galletas.png'),
      descripcion: 'Las galletas Pro-can son una deliciosa y nutritiva forma de recompensar a tu mejor amigo.',
      price: 800
    },
    {
      id: 13,
      name: 'Razas medianas y grandes',
      image: require('../img/galletas1.png'),
      descripcion: 'Consiéntelo con galletas Pro-can. Una manera nutritiva de recompensar su buen comportamiento.',
      price: 800
    },
    {
      id: 14,
      name: 'Hueso sabor pollo',
      image: require('../img/hueso.png'),
      price: 800
    },
    {
      id: 15,
      name: 'Rejo sabor natural',
      image: require('../img/hueso1.png'),
      price: 800
    },
    {
      id: 16,
      name: 'Hueso sabor surtido',
      image: require('../img/hueso2.png'),
      price: 800
    },
    {
      id: 17,
      name: 'Mini Hueso sabor carne',
      image: require('../img/hueso3.png'),
      descripcion: 'Consiéntelo con galletas Pro-can. Una manera nutritiva de recompensar su buen comportamiento.',
      price: 800
    },
    {
      id: 18,
      name: 'Rejos sabor carne',
      image: require('../img/hueso4.png'),
      price: 800
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {

  switch (action.type) {

    case TYPES.ADD_TO_CART: {

      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id)

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item),
        }
        : {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        }

      // return {
      //   ...state,
      //   cart:[...state.cart, newItem],
      // }

    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find(item => item.id === action.payload);
      return itemToDelete.quantity > 1 ? {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item),
      } : {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {

      return shoppingInitialState;

    }
    default:
      return state;
  }
}