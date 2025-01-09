import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f8ff;
    margin: 0;
    padding: 0;
  }
`;

const ShoppingCartIcon = () => <span style={{ fontSize: '18px' }}>🛒</span>;
const HeartIcon = () => <span style={{ fontSize: '18px' }}>❤️</span>;

const products = [
  {
    id: 1,
    name: 'Biodigester Tank',
    category: 'tanks',
    price: 38500,
    image: '/placeholder.svg?height=200&width=200&text=Biodigester+Tank',
    description: 'High-capacity Biodigester Tank for large households or small communities. Efficiently breaks down organic waste, producing biogas for cooking and heating.',
  },
  {
    id: 2,
    name: 'Enzyme Mix',
    category: 'additives',
    price: 5498.90,
    image: '/placeholder.svg?height=200&width=200&text=Enzyme+Mix',
    description: 'Specially formulated Enzyme Mix to boost biodigester performance. Accelerates organic matter breakdown, increases gas production, and reduces odors.',
  },
  {
    id: 3,
    name: 'Waste Shredder',
    category: 'equipment',
    price: 65998.90,
    image: '/placeholder.svg?height=200&width=200&text=Waste+Shredder',
    description: 'Industrial-grade Waste Shredder for efficient preprocessing of organic waste. Speeds up digestion process and improves biogas yield.',
  },
  {
    id: 4,
    name: 'Biogas Stove',
    category: 'appliances',
    price: 32998.90,
    image: '/placeholder.svg?height=200&width=200&text=Biogas+Stove',
    description: 'Efficient Biogas Stove designed specifically for use with biogas. Features adjustable flame control and a robust cast iron body.',
  },
  {
    id: 5,
    name: 'pH Testing Kit',
    category: 'accessories',
    price: 8798.90,
    image: '/placeholder.svg?height=200&width=200&text=pH+Testing+Kit',
    description: 'Comprehensive pH Testing Kit for maintaining optimal conditions in your biodigester. Includes 100 test strips and a color chart.',
  },
  {
    id: 6,
    name: 'Compact Biodigester',
    category: 'tanks',
    price: 164998.90,
    image: '/placeholder.svg?height=200&width=200&text=Compact+Biodigester',
    description: 'Space-saving Compact Biodigester perfect for small households or urban settings. Produces enough biogas for daily cooking needs.',
  },
  {
    id: 7,
    name: 'Biogas Purifier',
    category: 'equipment',
    price: 87998.90,
    image: '/placeholder.svg?height=200&width=200&text=Biogas+Purifier',
    description: 'Advanced Biogas Purifier to enhance gas quality. Removes impurities like hydrogen sulfide and moisture for cleaner-burning gas.',
  },
  {
    id: 8,
    name: 'Anaerobic Bacteria Mix',
    category: 'additives',
    price: 4398.90,
    image: '/placeholder.svg?height=200&width=200&text=Anaerobic+Bacteria+Mix',
    description: 'Carefully selected blend of Anaerobic Bacteria to jumpstart or revive biodigester systems. Optimizes the anaerobic digestion process.',
  },
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  animation: ${fadeIn} 0.5s ease-in;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #004d40;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconBadge = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff5722;
  color: #ffffff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const FilterSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #004d40;
  background-color: #ffffff;
  color: #004d40;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0f2f1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 77, 64, 0.2);
  }
`;

const Label = styled.label`
  margin-right: 0.5rem;
  color: #004d40;
  font-weight: bold;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #004d40;
`;

const CardPrice = styled.p`
  font-size: 1.1rem;
  color: #00695c;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const CartButton = styled(Button)`
  background-color: #004d40;
  color: #ffffff;

  &:hover {
    background-color: #00695c;
  }
`;

const WishlistButton = styled(Button)`
  background-color: #ffffff;
  color: #004d40;
  border: 1px solid #004d40;

  &:hover {
    background-color: #e0f2f1;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #ffffff;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  padding: 20px;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #004d40;
  margin-bottom: 1rem;
`;

const ModalItem = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const ModalItemName = styled.p`
  font-weight: bold;
  color: #004d40;
`;

const ModalItemPrice = styled.p`
  color: #00695c;
`;

const ModalButton = styled(Button)`
  background-color: #ff5722;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;

  &:hover {
    background-color: #f4511e;
  }
`;

const CloseButton = styled(Button)`
  background-color: #004d40;
  color: #ffffff;
  margin-top: 1rem;

  &:hover {
    background-color: #00695c;
  }
`;

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    let result = [...products];
    if (filter !== 'all') {
      result = result.filter(product => product.category === filter);
    }
    switch (sort) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceLow':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(result);
  }, [filter, sort]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const FilterSort = () => (
    <FilterSortContainer>
      <div>
        <Label htmlFor="filter">Filter by:</Label>
        <Select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Products</option>
          <option value="tanks">Tanks</option>
          <option value="additives">Additives</option>
          <option value="equipment">Equipment</option>
          <option value="appliances">Appliances</option>
          <option value="accessories">Accessories</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="sort">Sort by:</Label>
        <Select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </Select>
      </div>
    </FilterSortContainer>
  );

  const ProductCard = ({ product }) => (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardImage src={product.image} alt={product.name} />
      <CardContent>
        <CardName>{product.name}</CardName>
        <CardPrice>{formatPrice(product.price)}</CardPrice>
        <CardDescription>{product.description}</CardDescription>
        <ButtonContainer>
          <CartButton onClick={() => addToCart(product)}>
            <ShoppingCartIcon />
            Add to Cart
          </CartButton>
          <WishlistButton onClick={() => addToWishlist(product)}>
            <HeartIcon />
          </WishlistButton>
        </ButtonContainer>
      </CardContent>
    </Card>
  );

  const CartIcon = () => (
    <IconBadge onClick={() => setIsCartOpen(true)}>
      <ShoppingCartIcon />
      {cart.length > 0 && (
        <Badge>{cart.length}</Badge>
      )}
    </IconBadge>
  );

  const WishlistIcon = () => (
    <IconBadge onClick={() => setIsWishlistOpen(true)}>
      <HeartIcon />
      {wishlist.length > 0 && (
        <Badge>{wishlist.length}</Badge>
      )}
    </IconBadge>
  );

  const CartModal = () => (
    <AnimatePresence>
      {isCartOpen && (
        <Modal
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ModalTitle>Your Cart</ModalTitle>
          {cart.map(item => (
            <ModalItem key={item.id}>
              <ModalItemName>{item.name}</ModalItemName>
              <ModalItemPrice>{formatPrice(item.price)}</ModalItemPrice>
              <ModalButton onClick={() => removeFromCart(item.id)}>Remove</ModalButton>
            </ModalItem>
          ))}
          <CloseButton onClick={() => setIsCartOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </AnimatePresence>
  );

  const WishlistModal = () => (
    <AnimatePresence>
      {isWishlistOpen && (
        <Modal
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ModalTitle>Your Wishlist</ModalTitle>
          {wishlist.map(item => (
            <ModalItem key={item.id}>
              <ModalItemName>{item.name}</ModalItemName>
              <ModalItemPrice>{formatPrice(item.price)}</ModalItemPrice>
              <ModalButton onClick={() => removeFromWishlist(item.id)}>Remove</ModalButton>
            </ModalItem>
          ))}
          <CloseButton onClick={() => setIsWishlistOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Biodigester Shop</Title>
          <IconContainer>
            <CartIcon />
            <WishlistIcon />
          </IconContainer>
        </Header>
        <FilterSort />
        <ProductsGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        <CartModal />
        <WishlistModal />
      </Container>
    </>
  );
};

export default ShopPage;

