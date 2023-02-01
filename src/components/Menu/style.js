import styled from 'styled-components'

export const SideBar = styled.div`
    background-color: #FFECDA;
    width: 25rem;
    min-height: 100vh;

    .menu-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 1rem;
        border-bottom: 1px solid black;
    }

    .menu-navigation {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        margin-top: 5rem;

        button {
            display: flex;
            align-items: center;
            font-size: 1rem;
            font-weight: 700;
            color: #51443C;
            gap: 0.5rem;
            background-color: transparent;
            border: 0;
        }
    }

`