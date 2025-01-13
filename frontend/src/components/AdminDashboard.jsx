import React, { useState } from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaBox, FaCommentDots, FaCreditCard, FaChartBar, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const Sidebar = styled.aside`
  width: 250px;
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
  padding: 2rem 0;
  transition: all 0.3s ease;
  position: fixed;
  left: ${props => props.isOpen ? '0' : '-250px'};
  top: 0;
  bottom: 0;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    left: ${props => props.isOpen ? '0' : '-250px'};
  }
`;

const SidebarHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #3498db;
`;

const NavItem = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: none;
  border: none;
  color: #ecf0f1;
  text-align: left;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover, &.active {
    background-color: rgba(52, 152, 219, 0.2);
    color: #3498db;
  }

  svg {
    margin-right: 1rem;
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
  margin-left: ${props => props.sidebarOpen ? '250px' : '0'};
  transition: margin-left 0.3s ease;
  background-color: #ecf0f1;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MobileMenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const DashboardCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  color: #7f8c8d;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #bdc3c7;
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

// Main Component
const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: FaChartBar, path: '/admin' },
    { name: 'Orders', icon: FaShoppingCart, path: '/admin/orders' },
    { name: 'Inventory', icon: FaBox, path: '/admin/inventory' },
    { name: 'Customer Queries', icon: FaCommentDots, path: '/admin/queries' },
    { name: 'Payments', icon: FaCreditCard, path: '/admin/payments' },
    { name: 'Analytics', icon: FaChartBar, path: '/admin/analytics' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <DashboardContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>Admin Dashboard</SidebarHeader>
        <nav>
          {menuItems.map((item) => (
            <NavItem
              key={item.name}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => {
                navigate(item.path);
                if (window.innerWidth <= 768) {
                  setIsSidebarOpen(false);
                }
              }}
            >
              <item.icon />
              {item.name}
            </NavItem>
          ))}
          <NavItem onClick={() => console.log('Logout clicked')}>
            <FaSignOutAlt />
            Logout
          </NavItem>
        </nav>
      </Sidebar>

      <MainContent sidebarOpen={isSidebarOpen}>
        <MobileMenuButton onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/queries" element={<CustomerQueriesManagement />} />
          <Route path="/payments" element={<PaymentsManagement />} />
          <Route path="/analytics" element={<WebsiteAnalytics />} />
        </Routes>
      </MainContent>
    </DashboardContainer>
  );
};

const DashboardHome = () => (
  <>
    <PageTitle>Dashboard Overview</PageTitle>
    <DashboardGrid>
      <DashboardCard>
        <CardTitle>Total Orders</CardTitle>
        <CardContent>1,234</CardContent>
      </DashboardCard>
      <DashboardCard>
        <CardTitle>Revenue</CardTitle>
        <CardContent>$45,678</CardContent>
      </DashboardCard>
      <DashboardCard>
        <CardTitle>New Customers</CardTitle>
        <CardContent>56</CardContent>
      </DashboardCard>
      <DashboardCard>
        <CardTitle>Pending Queries</CardTitle>
        <CardContent>23</CardContent>
      </DashboardCard>
    </DashboardGrid>
    <ChartContainer>
      {/* You can add a chart library here, like recharts or chart.js */}
      <CardTitle>Sales Overview</CardTitle>
      <p>Chart will be displayed here</p>
    </ChartContainer>
  </>
);

const OrdersManagement = () => (
  <>
    <PageTitle>Orders Management</PageTitle>
    <Table>
      <thead>
        <tr>
          <Th>Order ID</Th>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Status</Th>
          <Th>Total</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>#1234</Td>
          <Td>John Doe</Td>
          <Td>2023-05-15</Td>
          <Td>Shipped</Td>
          <Td>$123.45</Td>
        </tr>
        <tr>
          <Td>#1235</Td>
          <Td>Jane Smith</Td>
          <Td>2023-05-16</Td>
          <Td>Processing</Td>
          <Td>$234.56</Td>
        </tr>
      </tbody>
    </Table>
    <StyledButton style={{ marginTop: '1rem' }}>Add New Order</StyledButton>
  </>
);

const InventoryManagement = () => (
  <>
    <PageTitle>Inventory Management</PageTitle>
    <Table>
      <thead>
        <tr>
          <Th>Product ID</Th>
          <Th>Name</Th>
          <Th>Category</Th>
          <Th>Stock</Th>
          <Th>Price</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>P001</Td>
          <Td>Widget A</Td>
          <Td>Electronics</Td>
          <Td>50</Td>
          <Td>$19.99</Td>
        </tr>
        <tr>
          <Td>P002</Td>
          <Td>Gadget B</Td>
          <Td>Electronics</Td>
          <Td>30</Td>
          <Td>$29.99</Td>
        </tr>
      </tbody>
    </Table>
    <StyledButton style={{ marginTop: '1rem' }}>Add New Product</StyledButton>
  </>
);

const CustomerQueriesManagement = () => (
  <>
    <PageTitle>Customer Queries Management</PageTitle>
    <Table>
      <thead>
        <tr>
          <Th>Query ID</Th>
          <Th>Customer</Th>
          <Th>Subject</Th>
          <Th>Date</Th>
          <Th>Status</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Q001</Td>
          <Td>Alice Johnson</Td>
          <Td>Product Return</Td>
          <Td>2023-05-14</Td>
          <Td>Open</Td>
        </tr>
        <tr>
          <Td>Q002</Td>
          <Td>Bob Williams</Td>
          <Td>Shipping Inquiry</Td>
          <Td>2023-05-15</Td>
          <Td>Closed</Td>
        </tr>
      </tbody>
    </Table>
    <StyledButton style={{ marginTop: '1rem' }}>Respond to Query</StyledButton>
  </>
);

const PaymentsManagement = () => (
  <>
    <PageTitle>Payments Management</PageTitle>
    <Table>
      <thead>
        <tr>
          <Th>Transaction ID</Th>
          <Th>Order ID</Th>
          <Th>Amount</Th>
          <Th>Date</Th>
          <Th>Status</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>T001</Td>
          <Td>#1234</Td>
          <Td>$123.45</Td>
          <Td>2023-05-15</Td>
          <Td>Completed</Td>
        </tr>
        <tr>
          <Td>T002</Td>
          <Td>#1235</Td>
          <Td>$234.56</Td>
          <Td>2023-05-16</Td>
          <Td>Pending</Td>
        </tr>
      </tbody>
    </Table>
    <StyledButton style={{ marginTop: '1rem' }}>Process Refund</StyledButton>
  </>
);

const WebsiteAnalytics = () => (
  <>
    <PageTitle>Website Analytics</PageTitle>
    <DashboardGrid>
      <DashboardCard>
        <CardTitle>Unique Visitors</CardTitle>
        <CardContent>5,678</CardContent>
      </DashboardCard>
      <DashboardCard>
        <CardTitle>Page Views</CardTitle>
        <CardContent>23,456</CardContent>
      </DashboardCard>
      <DashboardCard>
        <CardTitle>Bounce Rate</CardTitle>
        <CardContent>32%</CardContent>
      </DashboardCard>
      <DashboardCard>
        <CardTitle>Avg. Session Duration</CardTitle>
        <CardContent>3m 45s</CardContent>
      </DashboardCard>
    </DashboardGrid>
    <ChartContainer>
      <CardTitle>Traffic Sources</CardTitle>
      <p>Pie chart will be displayed here</p>
    </ChartContainer>
    <ChartContainer>
      <CardTitle>User Engagement Over Time</CardTitle>
      <p>Line chart will be displayed here</p>
    </ChartContainer>
  </>
);

export default AdminDashboard;

