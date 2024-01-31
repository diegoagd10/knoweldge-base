import { useState } from 'react';

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const buttonText = isFollowing ? "Following" : "Follow";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-header-avatar" alt="Foto de perfil del usuario" src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-header-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-header-info-username">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-button-text">{buttonText}</span>
                    <span className="tw-followCard-button-text-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    );
}
