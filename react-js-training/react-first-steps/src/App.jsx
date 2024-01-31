import './assets/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    return (
        <section className="tw-followCard-items">
            <TwitterFollowCard initialIsFollowing={false} userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard initialIsFollowing={false} userName="eldiariodedross" name="Dross" />
            <TwitterFollowCard initialIsFollowing userName="freddier" name="Freddy Vega" />
            <TwitterFollowCard initialIsFollowing={false} userName="cvander" name="Christian Van Der Henst" />
        </section>
    );
}