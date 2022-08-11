import React from 'react';

const InfoModal = ({ isShow, onClose }: { isShow: boolean, onClose: () => void }) => {
    return (
        <div style={{ display: isShow ? 'block' : 'none' }}>
            <div style={{
                top: 0,
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                backgroundColor: '#000e',
            }}></div>
            <div style={{
                top: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                margin: '0 auto',
                fontSize: '15px',
                fontFamily: 'monument',
            }}>
                <div onClick={onClose} style={{ marginTop: '20px', cursor: 'pointer', width: '100%', textAlign: 'right', color: 'white', marginRight: '100px', fontSize: '30px' }}>X</div>
                <div style={{
                    borderRadius: '10px',
                    marginTop: '30px',
                    padding: '20px',
                    display: 'inline-flex',
                    gap: '20px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    wordBreak: 'break-all',
                    boxShadow: '0px 0px 50px rgba(0, 0, 0)',
                    backgroundColor: 'rgba(20, 20, 20, 0.9)'
                }}>
                    <div>WHITELIST SPL Token Address: <span>w1DrgofydRqkVU6By5mhrbUqsUbJ5bwKAxhD6gVb1k7</span></div>
                    <img src='/img/spl.png' width={100} alt='' />
                    <div>CLAIM WITH YOUR WOBBLEDRUG WHITELIST TOKEN</div>
                    <img src='/img/arrow.png' width={70} alt='' />
                    <div>RECEIVE YOUR WOBBLEDRUG</div>
                    <img src='/img/wobbledrug.png' width={150} alt='' />
                </div>
            </div>
        </div>
    )
}

export default InfoModal;