package org.sofka.mykrello.model.service;

import java.util.List;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.repository.BoardRepository;
import org.sofka.mykrello.model.repository.LogRepository;
import org.sofka.mykrello.model.service.interfaces.LogServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *  la clase LogService tiene como proposito realizar la logica de las operaciones con los logs
 */
@Service
public class LogService implements LogServiceInterface {

    @Autowired
    private LogRepository logRepository;

    /**
     *
     * @param id recibe el id del log
     * @return retorna el log correspondiente a ese id
     */
    @Override
    @Transactional(readOnly = true)
    public List<LogDomain> findById(Integer id) {
        return (List<LogDomain>) logRepository.findById(id).orElse(null);
    }

    /**
     *
     * @param log recibe la informacion del log
     * @return crea un nuevo log
     */
    @Override
    public LogDomain create(LogDomain log) {
        return logRepository.save(log);
    }
}
