import styles from './styles.module.scss'
import Image from 'next/image'

import GoLibreImage from './../../../public/golibre.png'
import ConcurImage from './../../../public/concur.jpg'
import MatterMostImage from './../../../public/mattermost.png'
import { bebas_neue } from '@/app/fonts'

export default function ProjectHighlight() {
    return (
        <div className={styles.container}>
            <h3 className={bebas_neue.className}>Current Projects / Contributions</h3>
            <div className={styles.projectContainer}>
                <div className={styles.project}>
                    <div className={styles.owner}>
                        <span>Repository Owner</span>
                    </div>
                    <div className={styles.details}>
                        <a href='https://github.com/equalsgibson/golibre' rel='noreferrer' target='_blank'>
                            <Image
                                src={GoLibreImage}
                                alt='GoLibre Logo'
                                width={96}
                                height={96}
                            />
                        </a>
                        <div>
                            <h3><a href='https://github.com/equalsgibson/golibre' rel='noreferrer' target='_blank'>golibre</a></h3>
                            <p>A LibreView Client API written in Go</p>
                            <ul>
                                <li>Easily access Glucose Measurement data from the FreeStyle Libre systems</li>
                                <li>Written in Go and developed with <a href={'https://equalsgibson.github.io/golibre/coverage/coverage.html'} rel='noreferrer' target='_blank'>high test coverage</a></li>
                                <li>Currently used as the core system for a multiplatform GUI Application developed in Go; LibreLinker</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.contributor}>
                        Contributor
                    </div>
                    <div className={styles.details}>
                        <a href='https://github.com/mattermost/mattermost' rel='noreferrer' target='_blank'>
                            <Image
                                src={MatterMostImage}
                                alt='MatterMost logo'
                                width={96}
                                height={96}
                            />
                        </a>
                        <div>
                            <h3><a href='https://github.com/mattermost/mattermost' rel='noreferrer' target='_blank'>Mattermost</a></h3>
                            <p>Mattermost is an open source platform for secure collaboration across the entire software development lifecycle</p>
                            <ul>
                                <li>Contributed to the project by submitting pull requests against issues, that were merged into the <code>master</code> branch</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.owner}>
                        Repository Owner
                    </div>
                    <div className={styles.details}>
                        <a href='https://github.com/equalsgibson/concur' rel='noreferrer' target='_blank'>
                            <Image
                                src={ConcurImage}
                                alt='concur logo'
                                width={96}
                                height={96}
                                style={{ borderRadius: 50 }}
                            />
                        </a>
                        <div>
                            <h3><a href='https://github.com/equalsgibson/concur' rel='noreferrer' target='_blank'>concur</a></h3>
                            <p>An example of using concurrency in Go</p>
                            <ul>
                                <li>Provides a method of using goroutines to create a safe, concurrent ASyncReader</li>
                                <li>Based on a talk by <a href={'https://ajmani.net'} rel='noreferrer' target='_blank'>Sameer Ajmani</a> from <a href={'https://www.youtube.com/watch?v=QDDwwePbDtw'} rel='noreferrer' target='_blank'>Google I/O in 2013</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}