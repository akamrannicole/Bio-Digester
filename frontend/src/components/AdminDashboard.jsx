import React, { useState, useEffect } from "react"
import { useNavigate, useLocation, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import {
  FaShoppingCart,
  FaBox,
  FaCommentDots,
  FaCreditCard,
  FaChartBar,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa"

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`

const Sidebar = styled.aside`
  width: 250px;
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
  padding: 2rem 0;
  transition: all 0.3s ease;
  position: fixed;
  left: ${(props) => (props.isOpen ? "0" : "-250px")};
  top: 0;
  bottom: 0;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    left: ${(props) => (props.isOpen ? "0" : "-250px")};
  }
`

const SidebarHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #3498db;
`

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
`

const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
  background-color: #ecf0f1;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

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
`

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
`

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

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
`

const CardTitle = styled.h2`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`

const CardContent = styled.p`
  color: #7f8c8d;
`

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
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`

const Th = styled.th`
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: left;
`

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #bdc3c7;
`

const ChartContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`

const OrderDetails = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const AdminDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const menuItems = [
    { name: "Dashboard", icon: FaChartBar, path: "/admin" },
    { name: "Orders", icon: FaShoppingCart, path: "/admin/orders" },
    { name: "Inventory", icon: FaBox, path: "/admin/inventory" },
    { name: "Customer Queries", icon: FaCommentDots, path: "/admin/queries" },
    { name: "Payments", icon: FaCreditCard, path: "/admin/payments" },
    { name: "Analytics", icon: FaChartBar, path: "/admin/analytics" },
  ]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <DashboardContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>Admin Dashboard</SidebarHeader>
        <nav>
          {menuItems.map((item) => (
            <NavItem
              key={item.name}
              className={location.pathname === item.path ? "active" : ""}
              onClick={() => {
                navigate(item.path)
                if (window.innerWidth <= 768) {
                  setIsSidebarOpen(false)
                }
              }}
            >
              <item.icon />
              {item.name}
            </NavItem>
          ))}
          <NavItem onClick={() => navigate("/")}>
            <FaHome />
            Back to Home
          </NavItem>
          <NavItem onClick={() => console.log("Logout clicked")}>
            <FaSignOutAlt />
            Logout
          </NavItem>
        </nav>
      </Sidebar>

      <MainContent>
        <MobileMenuButton onClick={toggleSidebar}>{isSidebarOpen ? <FaTimes /> : <FaBars />}</MobileMenuButton>

        <Routes>
          <Route path="/admin" element={<DashboardHome />} />
          <Route path="/admin/orders" element={<OrdersManagement />} />
          <Route path="/admin/inventory" element={<InventoryManagement />} />
          <Route path="/admin/queries" element={<CustomerQueriesManagement />} />
          <Route path="/admin/payments" element={<PaymentsManagement />} />
          <Route path="/admin/analytics" element={<WebsiteAnalytics />} />
        </Routes>
      </MainContent>
    </DashboardContainer>
  )
}

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    revenue: 0,
    newCustomers: 0,
    pendingQueries: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        totalOrders: prevStats.totalOrders + Math.floor(Math.random() * 5),
        revenue: prevStats.revenue + Math.floor(Math.random() * 1000),
        newCustomers: prevStats.newCustomers + Math.floor(Math.random() * 3),
        pendingQueries: Math.max(0, prevStats.pendingQueries + Math.floor(Math.random() * 3) - 1),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageTitle>Dashboard Overview</PageTitle>
      <DashboardGrid>
        <DashboardCard>
          <CardTitle>Total Orders</CardTitle>
          <CardContent>{stats.totalOrders}</CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>Revenue</CardTitle>
          <CardContent>${stats.revenue.toLocaleString()}</CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>New Customers</CardTitle>
          <CardContent>{stats.newCustomers}</CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>Pending Queries</CardTitle>
          <CardContent>{stats.pendingQueries}</CardContent>
        </DashboardCard>
      </DashboardGrid>
      <ChartContainer>
        <CardTitle>Sales Overview</CardTitle>
        <p>Chart will be displayed here</p>
      </ChartContainer>
    </>
  )
}

const OrdersManagement = () => {
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const newOrder = {
        id: Math.floor(Math.random() * 1000),
        customer: `Customer ${Math.floor(Math.random() * 100)}`,
        date: new Date().toISOString(),
        status: "New",
        total: (Math.random() * 1000).toFixed(2),
        details: {
          items: [
            { name: "Product A", quantity: Math.floor(Math.random() * 5) + 1, price: (Math.random() * 100).toFixed(2) },
            { name: "Product B", quantity: Math.floor(Math.random() * 3) + 1, price: (Math.random() * 50).toFixed(2) },
          ],
          shippingAddress: "123 Main St, City, Country",
          paymentMethod: "Credit Card",
        },
      }
      setOrders((prevOrders) => [newOrder, ...prevOrders])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const handleOrderClick = (order) => {
    setSelectedOrder(order)
  }

  return (
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
          {orders.map((order) => (
            <tr key={order.id} onClick={() => handleOrderClick(order)} style={{ cursor: "pointer" }}>
              <Td>#{order.id}</Td>
              <Td>{order.customer}</Td>
              <Td>{new Date(order.date).toLocaleString()}</Td>
              <Td>{order.status}</Td>
              <Td>${order.total}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedOrder && (
        <OrderDetails>
          <h3>Order Details</h3>
          <p>Order ID: #{selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customer}</p>
          <p>Date: {new Date(selectedOrder.date).toLocaleString()}</p>
          <p>Status: {selectedOrder.status}</p>
          <p>Total: ${selectedOrder.total}</p>
          <h4>Items:</h4>
          <ul>
            {selectedOrder.details.items.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
          <p>Shipping Address: {selectedOrder.details.shippingAddress}</p>
          <p>Payment Method: {selectedOrder.details.paymentMethod}</p>
        </OrderDetails>
      )}
    </>
  )
}

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    const initialInventory = [
      { id: "P001", name: "Widget A", category: "Electronics", stock: 50, price: 19.99 },
      { id: "P002", name: "Gadget B", category: "Electronics", stock: 30, price: 29.99 },
      { id: "P003", name: "Gizmo C", category: "Toys", stock: 10, price: 9.99 },
    ]
    setInventory(initialInventory)

    const interval = setInterval(() => {
      setInventory((prevInventory) =>
        prevInventory.map((item) => ({
          ...item,
          stock: Math.max(0, item.stock + Math.floor(Math.random() * 5) - 2),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
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
          {inventory.map((item) => (
            <tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.category}</Td>
              <Td>{item.stock}</Td>
              <Td>${item.price.toFixed(2)}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <StyledButton style={{ marginTop: "1rem" }}>Add New Product</StyledButton>
    </>
  )
}

const CustomerQueriesManagement = () => {
  const [queries, setQueries] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newQuery = {
        id: `Q${Math.floor(Math.random() * 1000)}`,
        customer: `Customer ${Math.floor(Math.random() * 100)}`,
        subject: "New Query",
        date: new Date().toISOString(),
        status: "Open",
      }
      setQueries((prevQueries) => [newQuery, ...prevQueries])
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
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
          {queries.map((query) => (
            <tr key={query.id}>
              <Td>{query.id}</Td>
              <Td>{query.customer}</Td>
              <Td>{query.subject}</Td>
              <Td>{new Date(query.date).toLocaleString()}</Td>
              <Td>{query.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <StyledButton style={{ marginTop: "1rem" }}>Respond to Query</StyledButton>
    </>
  )
}

const PaymentsManagement = () => {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newPayment = {
        id: `T${Math.floor(Math.random() * 1000)}`,
        orderId: `#${Math.floor(Math.random() * 1000)}`,
        amount: (Math.random() * 1000).toFixed(2),
        date: new Date().toISOString(),
        status: "Completed",
      }
      setPayments((prevPayments) => [newPayment, ...prevPayments])
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
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
          {payments.map((payment) => (
            <tr key={payment.id}>
              <Td>{payment.id}</Td>
              <Td>{payment.orderId}</Td>
              <Td>${payment.amount}</Td>
              <Td>{new Date(payment.date).toLocaleString()}</Td>
              <Td>{payment.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <StyledButton style={{ marginTop: "1rem" }}>Process Refund</StyledButton>
    </>
  )
}

const WebsiteAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    uniqueVisitors: 0,
    pageViews: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics((prevAnalytics) => ({
        uniqueVisitors: prevAnalytics.uniqueVisitors + Math.floor(Math.random() * 10),
        pageViews: prevAnalytics.pageViews + Math.floor(Math.random() * 50),
        bounceRate: Math.min(100, Math.max(0, prevAnalytics.bounceRate + (Math.random() - 0.5) * 2)),
        avgSessionDuration: Math.max(0, prevAnalytics.avgSessionDuration + (Math.random() - 0.5) * 10),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageTitle>Website Analytics</PageTitle>
      <DashboardGrid>
        <DashboardCard>
          <CardTitle>Unique Visitors</CardTitle>
          <CardContent>{analytics.uniqueVisitors.toLocaleString()}</CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>Page Views</CardTitle>
          <CardContent>{analytics.pageViews.toLocaleString()}</CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>Bounce Rate</CardTitle>
          <CardContent>{analytics.bounceRate.toFixed(2)}%</CardContent>
        </DashboardCard>
        <DashboardCard>
          <CardTitle>Avg. Session Duration</CardTitle>
          <CardContent>{analytics.avgSessionDuration.toFixed(2)}s</CardContent>
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
  )
}

export default AdminDashboard

