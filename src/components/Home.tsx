import React, { useEffect } from 'react';
import { useGetCryptoMutation } from '../services/cryptoApi';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { CoinType } from '../types/CoinsType';

const Home: React.FC = () => {
    const [getCrypto, { data: cryptos }] = useGetCryptoMutation();

    useEffect(() => {
        const fetchData = async () => {
            await getCrypto(1);
        };
        fetchData();
    }, []);

    return (
        <main>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Volume</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos?.length ? (
                        cryptos.map((coin: CoinType, idx: number) => (
                            <tr key={idx}>
                                <td>{coin.market_cap_rank}</td>
                                <td>
                                    <Link to={`/detail/${coin.id}`} key={coin.id} className="img-info">
                                        <img src={coin?.image} alt={coin?.name} />
                                        <p>{coin?.symbol.toUpperCase()}</p>
                                    </Link>
                                </td>
                                <td>${coin.current_price.toLocaleString()}</td>
                                <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                                <td>${coin.total_volume.toLocaleString()}</td>
                                <td>${coin.market_cap.toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No data available</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </main>
    );
};

export default Home;
